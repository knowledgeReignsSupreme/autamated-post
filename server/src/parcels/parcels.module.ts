import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { filesProviders } from 'src/database/files.provider';
import { FilesController } from './parcels.controller';
import { ParcelsService } from './parcels.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FilesController],
  providers: [ParcelsService, ...filesProviders],
})
export class ParcelsModule {}
