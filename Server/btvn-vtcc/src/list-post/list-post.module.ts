import { Module } from '@nestjs/common';
import { ListPostController } from './list-post.controller';
import { ListPostService } from './list-post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListPostSchema } from './list-post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ListPost', schema: ListPostSchema }]),
  ],
  controllers: [ListPostController],
  providers: [ListPostService],
})
export class ListPostModule {}
