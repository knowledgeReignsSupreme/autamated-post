import { Injectable } from '@nestjs/common';
import { Parcel } from './parcel.interface';
import * as fs from 'fs';
import { NotFoundException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class ParcelsService {
  constructor() {}

  getParcels(): Parcel[] {
    let data: Parcel[] = [];
    const parcels = fs.readdirSync('uploads');

    parcels.forEach((filePath) => {
      const parcel = readFile(filePath);
      const { text } = parcel;
      data.push({ text, id: filePath });
    });

    return data;
  }

  async getParcel(fileName: string): Promise<Parcel> {
    const parcel = await readFile(fileName);
    if (!parcel) {
      throw new NotFoundException('File not found');
    }

    return { text: parcel.text, id: fileName };
  }

  createParcelGQL(file: FileUpload): { id: string } {
    const { createReadStream } = file;
    const newName = getUniqueName();
    let buffer;

    createReadStream()
      .on('data', (chunk) => {
        buffer = chunk;
      })
      .on('end', async () => {
        buffer = buffer.toString();

        fs.writeFileSync(`uploads/${newName}`, filterBadItems(buffer));
      });

    return { id: newName };
  }

  async updateParcelGQL(
    file: FileUpload,
    fileName: string,
  ): Promise<{ id: string }> {
    const { createReadStream } = file;
    const newName = getUniqueName();
    let buffer;

    createReadStream()
      .on('data', (chunk) => {
        buffer = chunk;
      })
      .on('end', async () => {
        buffer = buffer.toString();

        await fs.writeFileSync(`uploads/${fileName}`, filterBadItems(buffer));
      });

    return { id: newName };
  }

  deleteParcel(fileName: string): Parcel {
    try {
      const fileToBeDeleted = readFile(fileName);

      fs.unlinkSync(`uploads/${fileName}`);
      return fileToBeDeleted;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  // REST API implementation:
  async updateParcel(
    fileName: string,
    file: Express.Multer.File,
  ): Promise<Parcel> {
    const parcelItems = file.buffer.toString();
    const cleanParcelItems = filterBadItems(parcelItems);

    await fs.writeFile(`uploads/${fileName}`, cleanParcelItems, (error) => {
      if (error) throw new InternalServerErrorException();
    });

    return { text: cleanParcelItems, id: fileName };
  }

  // REST API implementation:
  async createParcel(file: Express.Multer.File): Promise<Parcel> {
    const fileName = getUniqueName();
    const parcelData = file.buffer.toString();
    const cleanParcelData = filterBadItems(parcelData);

    fs.writeFile(`uploads/${fileName}`, cleanParcelData, (error) => {
      if (error) throw new InternalServerErrorException();
    });

    return { text: cleanParcelData, id: fileName };
  }
}

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

  const filtered = splittedWords.filter(
    (item) => badItems.indexOf(item) === -1,
  );

  const joinedWords = filtered.join(' ');
  return joinedWords;
};

const getUniqueName = (): string => {
  const newName = `${new Date().getTime().toString()}.txt`;
  return newName;
};

const readFile = (fileName: string): Parcel => {
  const data = fs.readFileSync(`uploads/${fileName}`, 'utf-8');

  return { text: data, id: fileName };
};
