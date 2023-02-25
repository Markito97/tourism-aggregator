import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { House, HouseDocument } from './schemas/house.schema'
import { Model } from 'mongoose'
import { CreateHouseDto } from './schemas/create-house.dto'

interface IHouse {
  price: string
  name: string
  description: string
  location: string
  image: Array<string>
}

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>
  ) {}

  async createHouse(images: Array<string>, house: CreateHouseDto) {
    return await this.houseModel.create({ ...house, image: images })
  }

  async getHouses(): Promise<IHouse[]> {
    return await this.houseModel.find()
  }

  async getHouse(id: string): Promise<IHouse> {
    const house = await this.houseModel.findById(id)
    return house
  }
}
