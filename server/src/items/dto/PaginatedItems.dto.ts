import { Item } from '../item.interface';

export class PaginatedItemsDto {
  data: Item[];
  page: number;
  totalPages: number;
  totalItems: number;
}
