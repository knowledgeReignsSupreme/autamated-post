import { Module } from '@nestjs/common';
import { FilesController } from './parcels.controller';
import { ParcelsService } from './parcels.service';

@Module({
  controllers: [FilesController],
  providers: [ParcelsService],
})
export class ParcelsModule {}
