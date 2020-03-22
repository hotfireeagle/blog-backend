import { Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { UserService } from './user.service'
import { JWT_SECRET } from '../../constant/system'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'), //　定义token放在请求头中的位置
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET
    })
  }

  /**
   * 尽管到了这步，可以确定这个token是自己系统签发的且并未过期，但是此时不能就此放行，还需要判断这个token所对应的用户是否在数据库中，万一注销了呢？
   * @param payload : 经过decode之后的token数据
   */
  async validate(payload: any) {
    return await this.userService.findOneUserService({ id: payload.sub })
  }
}
