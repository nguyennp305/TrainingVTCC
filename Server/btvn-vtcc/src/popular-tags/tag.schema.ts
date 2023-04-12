import * as mongoose from 'mongoose';

export const TagSchema = new mongoose.Schema({
  id: Number,
  name: String,
});
