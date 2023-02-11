import { Module } from '@nestjs/common'
import { HousesController } from './houses.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { House, HouseSchema } from './schemas/house.schema'
import { FilesService } from 'src/files/files.service'
import { HouseService } from './houses.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: House.name, schema: HouseSchema }]),
  ],
  controllers: [HousesController],
  providers: [FilesService, HouseService],
})
export class HouseModule {}
