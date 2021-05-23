import { Connection } from 'mongoose';
import { FileSchema } from '../files/file.schema';

export const filesProviders = [
  {
    provide: 'FILE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('File', FileSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
