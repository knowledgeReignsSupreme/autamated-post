export interface Item {
  itemName: string;
  frequency: number;
}

export interface ItemData {
  data: Item[];
}

export interface PaginationData {
  totalPages: number;
  page: number;
  totalItems: number;
}

type PaginatedItemsResult = ItemData & PaginationData;

export interface PaginatedItemsData {
  itemsWithPagination: PaginatedItemsResult;
}

export interface ItemDataVars {
  pageNumber: number;
}
