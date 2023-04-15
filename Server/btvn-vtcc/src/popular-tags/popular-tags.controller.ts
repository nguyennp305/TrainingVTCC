import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
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

  //get tag by name
  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Tag> {
    const tag = await this.tagsService.findOneByName(name);
    if (!tag) throw new NotFoundException(`Tag with name "${name}" not found`);
    return tag;
  }

  // create tag
  @Post()
  async create(@Body() tag: Tag): Promise<Tag> {
    return this.tagsService.createTag(tag);
  }

  // update tag
  // @Put(':name')
  // async updateTag(@Param('name') name: string, @Body() tag: Tag): Promise<Tag> {
  //   const updatedTag = await this.tagsService.updateTagById(name, tag);
  //   return updatedTag;
  // }

  // delete tag
  @Delete(':name')
  async delete(@Param('name') name: string): Promise<Tag> {
    return this.tagsService.deleteTag(name);
  }
}
