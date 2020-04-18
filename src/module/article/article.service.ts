import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Article } from './article.entity'
import { ICreateArticle, ArticleInstance } from './article.interface'
import { SuccessStatus, ErrorStatus } from '../../constant/response'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepo: Repository<Article>,
  ) {}

  async newArticleService(articleObj: ICreateArticle) {
    const articleInstance: ArticleInstance = {
      ...articleObj,
      tags: articleObj.tags.map(tagId => ({ id: tagId }))
    }
    try {
      const result = await this.articleRepo.save(articleInstance)
      return { status: SuccessStatus, data: result, message: '成功创建' }
    } catch (err) {
      return { status: ErrorStatus, data: null, message: '发生错误' }
    }
  }

}