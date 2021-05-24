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
    const newName = renameFile(file);

    fs.rename(`uploads/${file.filename}`, `uploads/${newName}`, (err) => {
      if (err) throw new InternalServerErrorException();
    });

    return readFile(newName);
  }

  async getParcel(fileName: string): Promise<Parcel> {
    let parcel = await readFile(fileName);
    if (!parcel) {
      throw new NotFoundException('File not found');
    }

    return parcel;
  }

  async updateFile(
    fileName: string,
    file: Express.Multer.File,
  ): Promise<Parcel> {
    let parcelData = file.buffer.toString();

    await fs.writeFile(`uploads/${fileName}`, parcelData, (error) => {
      if (error) throw new InternalServerErrorException();
    });

    return { text: parcelData };
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

export const readFile = (fileName): Parcel => {
  try {
    let data = fs.readFileSync(`uploads/${fileName}`, 'utf-8');

    return { text: data };
  } catch (error) {
    throw new InternalServerErrorException();
  }
};

const renameFile = (file): string => {
  let fileExtension = file.originalname.split('.')[1];
  let newName = `${new Date().getTime().toString()}.${fileExtension}`;

  return newName;
};
