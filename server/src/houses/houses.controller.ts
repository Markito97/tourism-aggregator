import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  ParseFilePipeBuilder,
  Post,
} from '@nestjs/common';
import {
  Get,
  Param,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common/decorators';
import {
  AnyFilesInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { InjectModel } from '@nestjs/mongoose';
import { House, HouseDocument } from './schemas/house.schema';
import { Model } from 'mongoose';
import { FilesService } from 'src/files/files.service';
import { CreateHouseDto } from './schemas/create-house.dto';
import { HouseService } from './houses.service';

interface IHouse {
  price: string;
  name: string;
  description: string;
  location: string;
  image: Array<string>;
}

@Controller('houses')
export class HousesController {
  constructor(
    @InjectModel(House.name) readonly houseModel: Model<HouseDocument>,
    private filesService: FilesService,
    private houseService: HouseService,
  ) {}

  @Post('/createHouse')
  @UseInterceptors(FilesInterceptor('images'))
  createHouse(
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        .build({
          errorHttpStatusCode: 400,
        }),
    )
    images: Array<Express.Multer.File>,
    @Body() createHouseDto: any,
  ) {
    const house = JSON.parse(createHouseDto.house);
    const imagesPaths = this.filesService.createFile(images);
    return this.houseService.createHouse(imagesPaths, house);
  }

  @Get('/all')
  async getHouses(): Promise<IHouse[]> {
    return await this.houseService.getHouses();
  }

  @Get(':id')
  async getHouse(@Param() params): Promise<IHouse> {
    return await this.houseService.getHouse(params.id);
  }
}
