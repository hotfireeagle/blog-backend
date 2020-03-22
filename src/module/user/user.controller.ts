import { Controller, Post, Body } from '@nestjs/common'
import { SHA256 } from 'crypto-js'
import { UserService } from './user.service'
import { UserLoginDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async login(@Body() userLoginDto: UserLoginDto) {
    userLoginDto.password = SHA256(userLoginDto.password).toString()
    return await this.userService.userLoginService(userLoginDto)
  }
}