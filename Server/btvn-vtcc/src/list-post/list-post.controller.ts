import { Controller, Get, Param } from '@nestjs/common';
import { ListPostService } from './list-post.service';
import { ListPost } from './list-post.interface';

@Controller('list-post')
export class ListPostController {
  constructor(private readonly listPostService: ListPostService) {}

  @Get()
  async findAll(): Promise<ListPost[]> {
    return this.listPostService.findAll();
  }

  @Get(':tags')
  async findByTags(@Param('tags') tags: string): Promise<ListPost[]> {
    return this.listPostService.findByTags(tags);
  }
}
