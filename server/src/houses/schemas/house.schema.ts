import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type HouseDocument = HydratedDocument<House>;

@Schema()
export class House {
  @Prop()
  houseName: string;
  @Prop()
  adress: string;
  @Prop()
  lake: string;
  @Prop()
  price: string;
  @Prop()
  persons: string;
  @Prop()
  geoData: string;
  @Prop()
  description: string;
  @Prop()
  checkIn: number | null;
  @Prop()
  checkOut: number | null;
  @Prop()
  image: Array<string>;
}

export const HouseSchema = SchemaFactory.createForClass(House);
