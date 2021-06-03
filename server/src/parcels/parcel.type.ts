import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Parcel')
export class ParcelType {
  @Field((type) => ID)
  id: string;

  @Field()
  text: string;
}
