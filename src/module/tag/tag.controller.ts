import { Controller, Post, Body, HttpCode, Get, UseGuards, Delete, Query } from '@nestjs/common'
import { TagService } from './tag.service'
import { CreateTagDto } from './tag.dto'
import { JwtAuthGuard } from '../../guard/auth.guard'

@Controller('tag')
@UseGuards(JwtAuthGuard)
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

  @Delete('/:tagId')
  deleteTag(@Query('tagId') tagId: string) {
    return this.tagService.deleteTagService(tagId)
  }
}
