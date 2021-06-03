import { Module } from '@nestjs/common';
import { FilesController } from './parcels.controller';
import { ParcelsService } from './parcels.service';
import { ParcelResolver } from './parcel.resolver';

@Module({
  controllers: [FilesController],
  providers: [ParcelResolver, ParcelsService],
})
export class ParcelsModule {}
