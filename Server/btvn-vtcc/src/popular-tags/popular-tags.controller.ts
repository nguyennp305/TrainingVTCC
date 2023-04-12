import { Controller, Get } from '@nestjs/common';
import { TagsService } from './TagsService.service';
import { Tag } from './tag.interface';

@Controller('tags')
export class PopularTagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }
}
