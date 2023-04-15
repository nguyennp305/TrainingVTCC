import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from './tag.interface';

@Injectable()
export class TagsService {
  constructor(@InjectModel('Tag') private readonly tagModel: Model<Tag>) {}

  // tìm tất cả tags
  async findAll(): Promise<Tag[]> {
    return await this.tagModel.find().exec();
  }

  // tìm theo name của tags
  async findOneByName(name: string): Promise<Tag> {
    return this.tagModel.findOne({ name }).exec();
  }

  // create tag
  async createTag(tag: Tag): Promise<Tag> {
    const newTag = new this.tagModel(tag);
    return newTag.save();
  }

  // update tag
  // async updateTagById(name: string, tag: Tag): Promise<Tag> {
  //   const updatedTag = await this.tagModel.findOneAndUpdate({ name }, tag, {
  //     new: true,
  //   });
  //   return updatedTag;
  // }

  // delete tag
  async deleteTag(name: string): Promise<Tag> {
    return this.tagModel.findOneAndDelete({ name }).exec();
  }
}
