import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Item')
export class ItemType {
  @Field((type) => ID)
  itemName: string;

  @Field()
  frequency: number;
}

@ObjectType('PaginatedItemsType')
export class PaginatedItemType {
  @Field((type) => [ItemType])
  data: [ItemType];

  @Field()
  page: number;

  @Field()
  totalPages: number;

  @Field()
  totalItems: number;
}
