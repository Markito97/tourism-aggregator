import { Injectable } from '@nestjs/common'
import * as path from 'path'
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class FilesService {
  createFile(file: Express.Multer.File): string {
    try {
      const fileExtension = file.originalname.split('.').pop()
      const fileName = uuidv4() + '.' + fileExtension
      const filePath = path.resolve(__dirname, '..', 'static', 'images')
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true })
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)

      return 'images' + '/' + fileName
    } catch (err) {}
  }
}
