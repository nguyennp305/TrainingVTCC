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

  // tìm theo id của tags
  async findOneById(id: number): Promise<Tag> {
    return this.tagModel.findOne({ id }).exec();
  }

  // create tag
  async createTag(tag: Tag): Promise<Tag> {
    const newTag = new this.tagModel(tag);
    return newTag.save();
  }

  // update tag
  async updateTagById(id: number, tag: Tag): Promise<Tag> {
    const updatedTag = await this.tagModel.findOneAndUpdate({ id }, tag, {
      new: true,
    });
    return updatedTag;
  }

  // delete tag
  async deleteTag(id: number): Promise<Tag> {
    return this.tagModel.findOneAndDelete({ id }).exec();
  }
}
