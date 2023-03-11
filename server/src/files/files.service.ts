import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
  createFile(images: Array<Express.Multer.File>): Array<string> {
    try {
      const imagesExtensions = images.map((img) => ({
        ...img,
        fileName: img.originalname.split('.').pop(),
      }));
      console.log(imagesExtensions);
      const imagesNames = imagesExtensions.map((img) => ({
        ...img,
        fileName: uuidv4() + '.' + img.fileName,
      }));

      // const fileExtension = file.originalname.split('.').pop()
      // const fileName = uuidv4() + '.' + fileExtension
      const filePath = path.resolve(__dirname, '..', 'static', 'images');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      imagesNames.forEach((img) =>
        fs.writeFileSync(path.resolve(filePath, img.fileName), img.buffer),
      );

      const paths = imagesNames.map((img) => 'images' + '/' + img.fileName);
      return paths;
    } catch (err) {}
  }
}
