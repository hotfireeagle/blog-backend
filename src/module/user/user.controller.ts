import { Controller, Post, Body, HttpCode } from '@nestjs/common'
import { SHA256 } from 'crypto-js'
import { UserService } from './user.service'
import { UserLoginDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  @HttpCode(200) // 对于post请求来说，默认的响应状态码总是201，get请求来说，默认才是200
  async login(@Body() userLoginDto: UserLoginDto) {
    userLoginDto.password = SHA256(userLoginDto.password).toString()
    return await this.userService.userLoginService(userLoginDto)
  }
}