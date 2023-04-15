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

  // create a post in list post
  async createPost(post: ListPost): Promise<ListPost> {
    const newPost = new this.listPostModel(post);
    return newPost.save();
  }

  // update a post in list post by id
  async updatePostByName(id: string, post: ListPost): Promise<ListPost> {
    const updatedPost = await this.listPostModel
      .findOneAndUpdate({ _id: id }, post, { new: true })
      .exec();
    return updatedPost;
  }

  // delete a post in list post by id
  async deletePost(id: string): Promise<ListPost> {
    return await this.listPostModel.findOneAndDelete({ _id: id }).exec();
  }
}
