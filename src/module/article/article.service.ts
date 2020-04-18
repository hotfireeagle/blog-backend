import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, FindManyOptions } from 'typeorm'
import { Article } from './article.entity'
import { ICreateArticle, ArticleInstance, IQuery } from './article.interface'
import { SuccessStatus, ErrorStatus } from '../../constant/response'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepo: Repository<Article>,
  ) {}

  /**
   * 新建文章的逻辑
   * @param articleObj : 文章数据
   */
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

  /**
   * 进行文章查询
   * @param queryObj : 查询条件
   */
  async fetchArticleService(queryObj: IQuery) {
    !queryObj.page && (queryObj.page = 0)
    !queryObj.pageSize && (queryObj.pageSize = 10)

    const [result, count] = await this.articleRepo.createQueryBuilder('article')
      .leftJoin('article.tags', 'tag')
      .select(['article.id', 'article.title', 'tag.id', 'tag.name'])
      .where('tag.id = :tagId', { tagId: queryObj.tagId })
      .skip(queryObj.page * queryObj.pageSize)
      .take(queryObj.pageSize)
      .getManyAndCount()

    return { status: SuccessStatus, data: { result, total: count }, message: '' }
  }

}