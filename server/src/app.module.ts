import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseModule } from './houses/houses.module';
import { FilesModue } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    HouseModule,
    FilesModue,
    MongooseModule.forRoot('mongodb://localhost/houses'),
  ],
})
export class AppModule {}
