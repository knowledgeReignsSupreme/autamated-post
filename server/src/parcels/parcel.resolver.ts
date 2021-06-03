import { Resolver, Query } from '@nestjs/graphql';
import { response } from 'express';
import { ParcelType } from './parcel.type';
import { ParcelsService } from './parcels.service';

@Resolver((of) => ParcelType)
export class ParcelResolver {
  constructor(private parclService: ParcelsService) {}
  @Query((returns) => ParcelType)
  getParcel() {
    return this.parclService.getParcel('1621934209787.txt');
  }
}
