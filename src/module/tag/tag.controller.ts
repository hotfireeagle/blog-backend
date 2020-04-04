import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common'
import { TagService } from './tag.service'
import { CreateTagDto } from './tag.dto'

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('/new')
  @HttpCode(200)
  async create(@Body() tagObj: CreateTagDto) {
    return await this.tagService.newTagService(tagObj)
  }

  @Get('/all')
  getAll() {
    return this.tagService.findAllTags()
  }

}
