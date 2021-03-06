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
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Put } from '@nestjs/common';

@Controller('parcels')
export class FilesController {
  constructor(private parcelsService: ParcelsService) {}

  @Get('/')
  getParcels(): Parcel[] {
    return this.parcelsService.getParcels();
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  async createParcel(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Parcel> {
    return this.parcelsService.createParcel(file);
  }

  @Get('/:fileName')
  getParcel(@Param('fileName') fileName: string): Parcel {
    return this.parcelsService.getParcel(fileName);
  }

  @Put('/:fileName')
  @UseInterceptors(FileInterceptor('file'))
  updateParcel(
    @Param('fileName') fileName: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Parcel> {
    return this.parcelsService.updateParcel(fileName, file);
  }

  @Delete('/:fileName')
  deleteFile(@Param('fileName') fileName: string): Parcel {
    return this.parcelsService.deleteParcel(fileName);
  }
}
