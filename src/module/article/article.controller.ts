import { Controller, Post, Body, HttpCode } from '@nestjs/common'
import { ArticleService } from './article.service'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/new')
  @HttpCode(200)
  async create(@Body() articleObj) {
    return await this.articleService.newArticleService(articleObj)
  }
}