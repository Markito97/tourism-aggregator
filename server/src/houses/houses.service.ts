import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { House, HouseDocument } from './schemas/house.schema';
import { Model } from 'mongoose';
import { CreateHouseDto } from './schemas/create-house.dto';

interface IHouse {
  price: string;
  name: string;
  location: string;
  checkIn?: number | null;
  checkOut?: number | null;
  image: Array<string>;
  adress: string;
  lake: string;
  persons?: string | undefined;
  geoData?: string | undefined;
}

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>,
  ) {}

  async createHouse(images: Array<string>, house: CreateHouseDto) {
    return await this.houseModel.create({ ...house, image: images });
  }

  async getHouses(): Promise<IHouse[]> {
    return await this.houseModel.find();
  }

  async getHouse(id: string): Promise<IHouse> {
    return await this.houseModel.findById(id);
  }

  async bookingHouse(id: string, updateHouseDto: any) {
    return await this.houseModel.findByIdAndUpdate(id, updateHouseDto);
  }
}
