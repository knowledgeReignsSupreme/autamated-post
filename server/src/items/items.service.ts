import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { PaginatedItemsDto } from './dto/PaginatedItems.dto';

@Injectable()
export class ItemsService {
  constructor() {}

  getItemsByPopularity(pageNumber: number): PaginatedItemsDto {
    let items = [];
    let sortedItems = [];

    const resultsPerPage = 10;

    let parcels = fs.readdirSync('uploads');

    parcels.forEach((filePath) => {
      let data = fs.readFileSync(`uploads/${filePath}`).toString();
      data = data.replace(/(\r\n|\n|\r)/gm, '');

      items = [...items, ...data.split(' ')];
    });

    const uniqueItems = Array.from(new Set(items));

    uniqueItems.forEach((item) => {
      let freq = items.filter((it) => item === it).length;
      let obj = { itemName: item, frequency: freq };

      sortedItems = [...sortedItems, obj];
    });

    let totalItems = sortedItems.length;
    let totalPages = totalItems / resultsPerPage;
    totalPages = Math.ceil(totalPages);

    const sliceFrom = pageNumber > 1 ? pageNumber * 10 : 0;

    let slicedItems = sortedItems.slice(sliceFrom, 10);

    return {
      data: slicedItems,
      page: pageNumber,
      totalPages,
      totalItems,
    };
  }
}
