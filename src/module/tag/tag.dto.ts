import { MinLength, MaxLength, IsNotEmpty } from 'class-validator'

export class CreateTagDto {
  @IsNotEmpty({ message: '标签不能为空' })
  @MinLength(1, { message: '标签名至少１位' })
  @MaxLength(10, { message: '标签名最多10位' })
  name: string // 标签名
}