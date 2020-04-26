import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import { User } from './user.entity'
import { UserPartial, UserWithNP } from './user.interface'
import { SuccessStatus, ErrorStatus } from '../../constant/response'
import { TOKEN_LIFE } from '../../constant/system'

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

  /**
   * 根据用户名更新token的更新时间
   * @param userName : 用户名
   * @Param token : 表示用户的token
   */
  async updateUserToken(name: string, token: string) {
    await this.userRepo.update({ name }, { token, tokenBornDate: new Date() })
  }

  // 用户登陆的service
  async userLoginService(user: UserWithNP) {
    const userObj = await this.findOneUserService({ name: user.name }) // 根据用户名去查找用户
    if (userObj) {
      if (userObj.password === user.password) {
        const token = this.jwtService.sign({ name: userObj.name, sub: userObj.id })
        await this.updateUserToken(userObj.name, token)
        return { status: SuccessStatus, message: '登录成功', data: token }
      }
      return { status: ErrorStatus, message: '密码错误', data: null }
    } else {
      return { status: ErrorStatus, message: '不存在该用户', data: null }
    }
  }

  /**
   * 判断用户的token是否是有效的
   * @param token : string
   */
  async checkTokenValidService(token: string) {
    const userObj = await this.findOneUserService({ token })
    if (userObj) {
      const tokenBornDate = userObj.tokenBornDate
      const now = new Date()
      if (now.valueOf() - tokenBornDate.valueOf() > TOKEN_LIFE * 1000) {
        return { status: ErrorStatus, message: 'token已经过期', data: null }
      }
      return { status: SuccessStatus, message: 'ok', data: null }
    } else {
      return { status: ErrorStatus, message: '不存在此token', data: null }
    }
  }
}
