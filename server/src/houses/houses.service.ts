import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { House, HouseDocument } from './schemas/house.schema'
import { Model } from 'mongoose'
import { CreateHouseDto } from './schemas/create-house.dto'

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>
  ) {}

  async createHouse(image: string, house: CreateHouseDto) {
    return await this.houseModel.create({ ...house, image: image })
  }

  async getHouses() {
    return await this.houseModel.find()
  }
}
