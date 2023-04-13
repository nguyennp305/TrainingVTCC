import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListPost } from './list-post.interface';

@Injectable()
export class ListPostService {
  constructor(
    @InjectModel('ListPost') private readonly listPostModel: Model<ListPost>,
  ) {}

  // tìm tất cả listPost
  async findAll(): Promise<ListPost[]> {
    return await this.listPostModel.find().exec();
  }

  // tìm theo tags của post trong listPost
  async findByTags(tags: string): Promise<ListPost[]> {
    return await this.listPostModel.find({ tags }).exec();
  }
}
