import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ExpressAdapter, FileInterceptor } from '@nestjs/platform-express';
import { File } from './file.interface';
import { FilesService } from './files.service';
import { Express } from 'express';
import { Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { getFileInfo } from 'prettier';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get('/')
  getFiles(@Res() res: Response) {
    // return this.filesService.getFiles();
    let files = [];
    fs.readdir('uploads', (error, fileNames) => {
      if (error) throw error;

      fileNames.forEach((filePath) => {
        let data = readFile(filePath);
        files.push({ text: data });
      });

      res.json(files);
    });
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('file', { dest: 'uploads' }))
  async createFile(@UploadedFile() file: Express.Multer.File) {
    return readFile(file.filename);
  }

  @Get('/:fileName')
  getFile(@Param('fileName') fileName: string) {
    return readFile(fileName);
  }

  @Delete('/:fileName')
  deleteFile(@Param('fileName') fileName: string) {
    try {
      fs.unlinkSync(`uploads/${fileName}`);
      return { success: true };
    } catch (error) {}
  }
}

const readFile = (path) => {
  try {
    let data = fs.readFileSync(`uploads/${path}`, 'utf-8');

    return data.toString();
  } catch (error) {}
};
