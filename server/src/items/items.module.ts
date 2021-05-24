import { Module } from '@nestjs/common';
import { ParcelsService } from 'src/files/parcels.service';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
