import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { PaginatedItemsDto } from './dto/PaginatedItems.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get('/:pageNumber')
  getItemsByPopularity(
    @Param('/:pageNumber') pageNumber: string | number = 1,
  ): PaginatedItemsDto {
    pageNumber = Number(pageNumber);

    return this.itemsService.getItemsByPopularity(pageNumber);
  }
}
