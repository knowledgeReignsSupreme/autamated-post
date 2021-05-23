import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { filesProviders } from 'src/database/files.provider';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FilesController],
  providers: [FilesService, ...filesProviders],
})
export class FilesModule {}
