import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from './files/files.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
