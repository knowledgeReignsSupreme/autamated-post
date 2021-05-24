import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Parcel } from './parcel.interface';
import * as fs from 'fs';
import { Response } from 'express';
import { NotFoundException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ParcelsService {
  constructor(
    @Inject('FILE_MODEL')
    private fileModel: Model<Parcel>,
  ) {}

  getParcels(res: Response): void {
    let parcels = [];
    fs.readdir('uploads', (error, fileNames) => {
      if (error) throw error;

      fileNames.forEach((filePath) => {
        let data = readFile(filePath);
        parcels.push(data);
      });

      res.json(parcels);
    });
  }

  async createParcel(file: Express.Multer.File): Promise<Parcel> {
    const fileName = renameFile(file);
    const parcelData = file.buffer.toString();
    const cleanParcelData = filterBadItems(parcelData);

    fs.writeFile(`uploads/${fileName}`, cleanParcelData, (error) => {
      if (error) throw new InternalServerErrorException();
    });

    return { text: cleanParcelData };
  }

  async getParcel(fileName: string): Promise<Parcel> {
    const parcel = await readFile(fileName);
    if (!parcel) {
      throw new NotFoundException('File not found');
    }

    return parcel;
  }

  async updateFile(
    fileName: string,
    file: Express.Multer.File,
  ): Promise<Parcel> {
    const parcelItems = file.buffer.toString();
    const cleanParcelItems = filterBadItems(parcelItems);

    await fs.writeFile(`uploads/${fileName}`, cleanParcelItems, (error) => {
      if (error) throw new InternalServerErrorException();
    });

    return { text: cleanParcelItems };
  }

  deleteParcel(fileName: string): { success: boolean } {
    try {
      fs.unlinkSync(`uploads/${fileName}`);
      return { success: true };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}

const readFile = (fileName: string): Parcel => {
  try {
    const data = fs.readFileSync(`uploads/${fileName}`, 'utf-8');

    return { text: data };
  } catch (error) {
    throw new InternalServerErrorException();
  }
};

const renameFile = (file: Express.Multer.File): string => {
  const fileExtension = file.originalname.split('.')[1];
  const newName = `${new Date().getTime().toString()}.${fileExtension}`;

  return newName;
};

const filterBadItems = (parcelItems: string) => {
  const badItems = [
    'drugs',
    'gun',
    'knife',
    'monkey',
    'pills',
    'sword',
    'wine',
  ];

  const removeLineBreak = parcelItems.replace(/(\r\n|\n|\r)/gm, '');
  const splittedWords = removeLineBreak.split(' ');

  for (let item of splittedWords) {
    if (badItems.includes(item)) {
      const index = splittedWords.indexOf(item);
      splittedWords.splice(index, 1);
    }
  }

  const joinedWords = splittedWords.join(' ');
  return joinedWords;
};
