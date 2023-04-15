import * as mongoose from 'mongoose';

export const ListPostSchema = new mongoose.Schema({
  name: String,
  title: String,
  content: String,
  tags: String,
  numberHeart: Number,
  heartColor: String,
  avatar: String,
  checkComment: Boolean,
  numberComment: Number,
});
