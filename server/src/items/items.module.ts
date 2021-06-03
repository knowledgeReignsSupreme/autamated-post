import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemResolver } from './item.resolver';

@Module({
  controllers: [ItemsController],
  providers: [ItemResolver, ItemsService],
})
export class ItemsModule {}
