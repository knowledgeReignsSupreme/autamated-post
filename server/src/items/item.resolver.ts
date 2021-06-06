import { Resolver, Query, Args } from '@nestjs/graphql';
import { PaginatedItemsDto } from './dto/PaginatedItems.dto';
import { ItemsService } from './items.service';
import { PaginatedItemType } from './items.type';

@Resolver((of) => PaginatedItemType)
export class ItemResolver {
  constructor(private itemsService: ItemsService) {}
  @Query((returns) => PaginatedItemType)
  itemsWithPagination(
    @Args('pageNumber') pageNumber: number,
  ): PaginatedItemsDto {
    return this.itemsService.getItemsByPopularity(pageNumber);
  }
}
