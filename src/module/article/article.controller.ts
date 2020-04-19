import { Controller, Post, Body, HttpCode, UseGuards, Get, Param } from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './article.dto'
import { JwtAuthGuard } from '../../guard/auth.guard'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/new')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async create(@Body() articleObj: CreateArticleDto) {
    return await this.articleService.newArticleService(articleObj)
  }

  @Post('/query')
  @HttpCode(200)
  async query(@Body() queryObj) {
    return await this.articleService.fetchArticleService(queryObj)
  }

  @Get('/:articleId')
  async getDetail(@Param('articleId') id) {
    return await this.articleService.fetchArticleDetail(id)
  }
}