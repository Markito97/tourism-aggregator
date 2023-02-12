import { Body, Controller, Post, UploadedFile } from '@nestjs/common'
import { Get, UseInterceptors } from '@nestjs/common/decorators'
import { FileInterceptor } from '@nestjs/platform-express'
import { InjectModel } from '@nestjs/mongoose'
import { House, HouseDocument } from './schemas/house.schema'
import { Model } from 'mongoose'
import { FilesService } from 'src/files/files.service'
import { CreateHouseDto } from './schemas/create-house.dto'
import { HouseService } from './houses.service'

@Controller('houses')
export class HousesController {
  constructor(
    @InjectModel(House.name) readonly houseModel: Model<HouseDocument>,
    private filesService: FilesService,
    private houseService: HouseService
  ) {}

  @Post('/createHouse')
  @UseInterceptors(FileInterceptor('file'))
  createHouse(
    @UploadedFile() file: Express.Multer.File,
    @Body() createHouseDto: any
  ) {
    const house = { ...createHouseDto }
    const parse = JSON.parse(house.house)
    const image = this.filesService.createFile(file)
    const res = this.houseService.createHouse(image, parse)
  }

  @Get('allHouses')
  async getHouses() {
    return await this.houseService.getHouses()
  }
}
