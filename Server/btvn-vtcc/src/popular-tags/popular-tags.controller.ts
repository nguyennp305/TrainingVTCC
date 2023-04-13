import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TagsService } from './TagsService.service';
import { Tag } from './tag.interface';

@Controller('tags')
export class PopularTagsController {
  constructor(private readonly tagsService: TagsService) {}

  // get all tags
  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }

  //get tag by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Tag> {
    return this.tagsService.findOneById(id);
  }

  // create tag
  @Post()
  async create(@Body() tag: Tag): Promise<Tag> {
    return this.tagsService.createTag(tag);
  }

  // update tag
  @Put(':id')
  async updateTag(@Param('id') id: number, @Body() tag: Tag): Promise<Tag> {
    const updatedTag = await this.tagsService.updateTagById(id, tag);
    return updatedTag;
  }

  // delete tag
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Tag> {
    return this.tagsService.deleteTag(id);
  }
}
