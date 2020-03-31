import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import { User } from './user.entity'
import { UserPartial, UserWithNP } from './user.interface'
import { SuccessStatus, ErrorStatus } from '../../constant/response'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 根据指定条件查找用户
   * @param options : 用户的某些属性
   */
  findOneUserService(options: UserPartial): Promise<User> {
    return this.userRepo.findOne(options)
  }

  async userLoginService(user: UserWithNP) {
    const userObj = await this.findOneUserService({ name: user.name })
    if (userObj) {
      if (userObj.password === user.password) {
        const token = this.jwtService.sign({ name: userObj.name, sub: userObj.id })
        return { status: SuccessStatus, message: '登录成功', data: token }
      }
      return { status: ErrorStatus, message: '密码错误', data: null }
    } else {
      return { status: ErrorStatus, message: '不存在该用户', data: null }
    }
  }
}
