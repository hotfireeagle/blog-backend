import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Tag } from './tag.entity'
import { ITagWN } from './tag.interface'
import { SuccessStatus, ErrorStatus } from '../../constant/response'

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepo: Repository<Tag>,
  ) {}

  /**
   * 根据标签名查找此时数据库中是否存在同名标签
   * @param name : 标签名
   */
  findTagByName(name: string): Promise<Tag> {
    return this.tagRepo.findOne({ name })
  }

  /**
   * 创建标签的方法
   * @param tag : tag对象，拥有标签名字即可
   */
  async newTagService(tag: ITagWN) {
    const tagObj = await this.findTagByName(tag.name)
    if (!tagObj) {
      const result = await this.tagRepo.save(tag)
      return { status: SuccessStatus, message: '成功创建', data: result }
    } else {
      return { status: ErrorStatus, message: '该标签已存在', data: null }
    }
  }
}