import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type HouseDocument = HydratedDocument<House>;

@Schema()
export class House {
  @Prop()
  price: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  location: string;
  @Prop()
  checkIn: number | null;
  @Prop()
  checkOut: number | null;
  @Prop()
  image: Array<string>;
}

export const HouseSchema = SchemaFactory.createForClass(House);
