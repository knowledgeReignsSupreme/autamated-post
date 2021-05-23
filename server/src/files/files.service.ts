import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { File } from './file.interface';

@Injectable()
export class FilesService {
  constructor(
    @Inject('FILE_MODEL')
    private fileModel: Model<File>,
  ) {}

  async getFiles(): Promise<File[]> {
    return await this.fileModel.find().exec();
  }
}
