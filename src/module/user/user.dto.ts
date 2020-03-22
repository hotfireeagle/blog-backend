import { IsString, MinLength, MaxLength } from 'class-validator'

export class UserLoginDto {
  @IsString({ message: '用户名必须是字符串' })
  @MinLength(2, { message: '用户名至少2位' })
  @MaxLength(10, { message: '用户名最多10位' })
  name: string // 用户名

  @IsString({ message: '密码必须是字符串' })
  password: string // 密码
}