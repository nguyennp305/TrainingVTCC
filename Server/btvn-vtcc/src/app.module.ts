import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TagsModule } from './popular-tags/popular-tags.module';
import { ListPostModule } from './list-post/list-post.module';
@Module({
  imports: [
    // ConfigModule.forRoot(): Đây là một module NestJS để đọc các biến môi trường được định nghĩa trong tệp .env và tạo ra một đối tượng cấu hình, cho phép ứng dụng đọc các giá trị cấu hình mà không cần phải trực tiếp đặt giá trị trong mã nguồn.
    ConfigModule.forRoot({
      envFilePath: '.env',
      // isGlobal: Thiết lập đối tượng cấu hình có phạm vi toàn cục, cho phép các giá trị cấu hình được sử dụng trong toàn bộ ứng dụng của bạn.
      isGlobal: true,
    }),
    // MongooseModule cho phép bạn tạo các kết nối tới cơ sở dữ liệu MongoDB và cung cấp các tùy chọn để cấu hình kết nối, như thêm thông tin xác thực, cổng và host, và tên cơ sở dữ liệu.
    // MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test-user'),
    BookModule,
    UsersModule,
    AuthModule,
    TagsModule,
    ListPostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
