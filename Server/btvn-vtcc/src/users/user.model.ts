// định nghĩa các properties của use bao gồm email, password, name, ...
import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      // unique: đảm bảo không có người dùng nào trùng tên đăng nhập
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  // tự động thêm hai trường createdAt và updatedAt
  { timestamps: true },
);

export interface User extends mongoose.Document {
  _id: string;
  username: string;
  password: string;
}
