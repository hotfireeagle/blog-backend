import { MinLength, MaxLength, IsNotEmpty } from 'class-validator'

export class CreateArticleDto {
  @IsNotEmpty({ message: '标题不能为空' })
  @MinLength(1, { message: '标题至少1位' })
  @MaxLength(30, { message: '标题最多30位' })
  title: string // 文章标题

  @IsNotEmpty({ message: '内容不能为空' })
  content: string // 文章内容

  @IsNotEmpty({ message: '标签不能为空' })
  tags: Array<number> // 标签ID
}