import { Module } from '@nestjs/common';
import { ParcelsModule } from './parcels/parcels.module';
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from '@nestjs/graphql';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    ParcelsModule,
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
