import { Body, Controller, ParseFilePipeBuilder, Post } from "@nestjs/common";
import {
  Get,
  Param,
  Put,
  UploadedFiles,
  UseInterceptors,
  Req,
  Res,
} from "@nestjs/common/decorators";
import { FilesInterceptor } from "@nestjs/platform-express";
import { InjectModel } from "@nestjs/mongoose";
import { House, HouseDocument } from "./schemas/house.schema";
import { Model } from "mongoose";
import { FilesService } from "src/files/files.service";
import { HouseService } from "./houses.service";

interface IBooking {
  CHECK_IN: number;
  CHECK_OUT: number;
}

interface IRating {
  oneStar: Array<string>;
  twoStar: Array<string>;
  threeStar: Array<string>;
  fourStar: Array<string>;
  fiveStar: Array<string>;
}

export interface IHouse {
  [x: string]: any;
  checkOut: number | null;
  checkIn: number | null;
  houseName: string;
  address: string;
  lake: string;
  price: string;
  persons: string;
  geoData: string;
  image: Array<string>;
  rating: IRating;
  booking: Array<IBooking>;
}

@Controller("houses")
export class HousesController {
  constructor(
    @InjectModel(House.name) readonly houseModel: Model<HouseDocument>,
    private filesService: FilesService,
    private houseService: HouseService
  ) {}

  @Post("test")
  async bookingQuery(@Body() date: IBooking, @Res() res: any) {
    const houses = await this.houseService.getHouses();
    const withoutBooking = houses.filter((house) => !house.booking.length);
    const withBooking = houses.filter((house) => house.booking.length);
    const withinTheRange = withBooking.filter((house) =>
      house.booking.every(
        (range) =>
          (date.CHECK_IN < range.CHECK_IN && date.CHECK_OUT < range.CHECK_IN) ||
          (date.CHECK_IN > range.CHECK_OUT && date.CHECK_OUT > range.CHECK_OUT)
      )
    );
    return res.json(withoutBooking.concat(withinTheRange));
  }

  @Post()
  @UseInterceptors(FilesInterceptor("images"))
  createHouse(
    @UploadedFiles()
    images: // new ParseFilePipeBuilder()
    //   .addFileTypeValidator({
    //     fileType: 'jpeg',
    //   })
    //   .build({
    //     errorHttpStatusCode: 400,
    //   }),
    Array<Express.Multer.File>,
    @Body() createHouseDto: any
  ) {
    const house = JSON.parse(createHouseDto.house);
    const imagesPaths = this.filesService.createFile(images);
    return this.houseService.createHouse(imagesPaths, house);
  }

  @Get()
  async getHouses(): Promise<IHouse[]> {
    return await this.houseService.getHouses();
  }

  @Get(":id")
  async getHouse(@Param() params): Promise<IHouse> {
    return await this.houseService.getHouse(params.id);
  }

  @Put(":id")
  async bookingHouse(@Param("id") id: string, @Body() updateHouseDto: any) {
    return await this.houseService.bookingHouse(id, updateHouseDto);
  }
}
