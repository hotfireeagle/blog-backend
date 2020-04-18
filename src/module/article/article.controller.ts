import { Controller, Post, Body, HttpCode, UseGuards } from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './article.dto'
import { JwtAuthGuard } from '../../guard/auth.guard'

@Controller('article')
@UseGuards(JwtAuthGuard)
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/new')
  @HttpCode(200)
  async create(@Body() articleObj: CreateArticleDto) {
    return await this.articleService.newArticleService(articleObj)
  }

  @Post('/query')
  @HttpCode(200)
  async query(@Body() queryObj) {
    return await this.articleService.fetchArticleService(queryObj)
  }
}