import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParcelsModule } from './files/parcels.module';
import { ItemsModule } from './items/items.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [ParcelsModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
