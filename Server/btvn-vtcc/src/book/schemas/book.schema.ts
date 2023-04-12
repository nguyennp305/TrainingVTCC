// file nay dung de tao ra schema cho book.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export enum Category {
  ADVENTURE = 'Adventure',
  FANTASY = 'Fantasy',
  CRIME = 'Crime',
  CLASSICS = 'Classics',
}
@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  descripton: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
