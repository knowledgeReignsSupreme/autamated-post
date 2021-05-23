import { Controller, Get } from '@nestjs/common';
import { File } from './file.interface';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get('/')
  getFiles(): Promise<File[]> {
    console.log('WHATT');
    return this.filesService.getFiles();
  }
}
