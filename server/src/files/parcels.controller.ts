import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Parcel } from './parcel.interface';
import { ParcelsService } from './parcels.service';
import { Express } from 'express';
import { Res } from '@nestjs/common';
import { Response } from 'express';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Put } from '@nestjs/common';

@Controller('parcels')
export class FilesController {
  constructor(private parcelsService: ParcelsService) {}

  @Get('/')
  getFiles(@Res() res: Response): void {
    return this.parcelsService.getParcels(res);
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('file', { dest: 'uploads' }))
  async createParcel(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Parcel> {
    return this.parcelsService.createParcel(file);
  }

  @Get('/:fileName')
  getParcel(@Param('fileName') fileName: string): Promise<Parcel> {
    return this.parcelsService.getParcel(fileName);
  }

  @Put('/:fileName')
  @UseInterceptors(FileInterceptor('file'))
  updateParcel(
    @Param('fileName') fileName: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Parcel> {
    return this.parcelsService.updateFile(fileName, file);
  }

  @Delete('/:fileName')
  deleteFile(@Param('fileName') fileName: string): { success: boolean } {
    return this.parcelsService.deleteParcel(fileName);
  }
}
