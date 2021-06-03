import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParcelType } from './parcel.type';
import { ParcelsService } from './parcels.service';
import { GraphQLUpload } from 'graphql-upload';
import { Parcel } from './parcel.interface';

@Resolver((of) => ParcelType)
export class ParcelResolver {
  constructor(private parcelService: ParcelsService) {}

  @Query((returns) => [ParcelType])
  parcels(): Parcel[] {
    return this.parcelService.getAllParcels();
  }

  @Query((returns) => ParcelType)
  parcel(@Args('fileName') fileName: string): Promise<Parcel> {
    return this.parcelService.getParcel(fileName);
  }

  // @Mutation(() => File)
  // createParcel(@Args({ name: 'file', type: () => GraphQLUpload }) file) {
  //   return this.createParcel(file);
  // }
}
