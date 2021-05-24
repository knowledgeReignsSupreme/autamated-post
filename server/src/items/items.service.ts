import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { PaginatedItemsDto } from './dto/PaginatedItems.dto';

@Injectable()
export class ItemsService {
  constructor() {}

  getItemsByPopularity(pageNumber: number): PaginatedItemsDto {
    let items = [];
    let itemsData = [];

    const resultsPerPage = 10;

    const parcels = fs.readdirSync('uploads');

    parcels.forEach((filePath) => {
      const data = fs.readFileSync(`uploads/${filePath}`).toString();
      const textWithNoLinBreaks = data.replace(/(\r\n|\n|\r)/gm, '');

      items = [...items, ...textWithNoLinBreaks.split(' ')];
    });

    const uniqueItems = Array.from(new Set(items));

    uniqueItems.forEach((item) => {
      const freq = items.filter((it) => item === it).length;
      const obj = { itemName: item, frequency: freq };

      if (item) {
        itemsData = [...itemsData, obj];
      }
    });

    const totalItems = itemsData.length;
    let totalPages = totalItems / resultsPerPage;
    totalPages = Math.ceil(totalPages);

    const sortedItems = itemsData.sort((a, b) => b.frequency - a.frequency);

    const sliceFrom = pageNumber === 1 ? 0 : (pageNumber - 1) * 10;

    const slicedItems = sortedItems.slice(sliceFrom, sliceFrom + 10);

    return {
      data: slicedItems,
      page: pageNumber,
      totalPages,
      totalItems,
    };
  }
}
