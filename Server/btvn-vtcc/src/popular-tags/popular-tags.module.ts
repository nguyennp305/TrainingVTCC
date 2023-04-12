import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsService } from './TagsService.service';
import { PopularTagsController } from './popular-tags.controller';
import { TagSchema } from './tag.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }])],
  controllers: [PopularTagsController],
  providers: [TagsService],
})
export class TagsModule {}
