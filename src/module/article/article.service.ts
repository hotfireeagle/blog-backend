import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Article } from './article.entity'
import { SuccessStatus, ErrorStatus } from '../../constant/response'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepo: Repository<Article>,
  ) {}

  async newArticleService(articleObj) {
    const result = await this.articleRepo.save(articleObj)
    return { status: SuccessStatus, data: result, message: 'ok' }
  }

}