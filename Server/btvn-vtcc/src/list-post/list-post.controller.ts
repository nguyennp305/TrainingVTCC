import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ListPostService } from './list-post.service';
import { ListPost } from './list-post.interface';

@Controller('list-post')
export class ListPostController {
  constructor(private readonly listPostService: ListPostService) {}

  // tìm tất cả listPost
  @Get()
  async findAll(): Promise<ListPost[]> {
    return this.listPostService.findAll();
  }

  // tìm post theo id.
  @Get(':id')
  async findById(@Param('id') id: string): Promise<ListPost[]> {
    return this.listPostService.findById(id);
  }

  // tìm post theo tag.
  @Get('tags/:tags')
  async findByTags(@Param('tags') tags: string): Promise<ListPost[]> {
    return this.listPostService.findByTags(tags);
  }

  // create a post in list post
  @Post()
  async createPost(@Body() post: ListPost): Promise<ListPost> {
    return this.listPostService.createPost(post);
  }

  // update a post in list post by id
  @Put(':id')
  async updatePostName(
    @Param('id') id: string,
    @Body() post: ListPost,
  ): Promise<ListPost> {
    const updatedPost = await this.listPostService.updatePostByName(id, post);
    if (!updatedPost) {
      throw new NotFoundException('Post not found');
    }
    return updatedPost;
  }

  // delete a post in list post by id
  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<ListPost> {
    return this.listPostService.deletePost(id);
  }
}
