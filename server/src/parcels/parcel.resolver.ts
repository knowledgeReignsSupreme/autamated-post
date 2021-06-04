import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParcelType } from './parcel.type';
import { ParcelsService } from './parcels.service';
import { Parcel } from './parcel.interface';
import { FileUpload } from 'graphql-upload';

import { GraphQLUpload } from 'apollo-server-express';

@Resolver((of) => ParcelType)
export class ParcelResolver {
  constructor(private parcelService: ParcelsService) {}

  @Query((returns) => [ParcelType])
  parcels(): Parcel[] {
    return this.parcelService.getParcels();
  }

  @Query((returns) => ParcelType)
  parcel(@Args('fileName') fileName: string): Promise<Parcel> {
    return this.parcelService.getParcel(fileName);
  }

  @Mutation((returns) => ParcelType)
  deleteParcel(@Args('fileName') fileName: string): Parcel {
    return this.parcelService.deleteParcel(fileName);
  }

  @Mutation(() => ParcelType)
  async updateParcel(
    @Args('file', { type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
    @Args('fileName')
    fileName: string,
  ): Promise<{ id: string }> {
    return this.parcelService.updateParcelGQL(file, fileName);
  }

  @Mutation(() => ParcelType)
  createParcel(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ): { id: string } {
    return this.parcelService.createParcelGQL(file);
  }
}
