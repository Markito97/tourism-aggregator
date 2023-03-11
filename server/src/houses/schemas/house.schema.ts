import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type HouseDocument = HydratedDocument<House>;
export type RaitingDocument = HydratedDocument<Raiting>
// interface IRatinig {
  // oneStars: Array<string>,
  // twoStars:Array<string>,
  // threeStars: Array<string>,
  // fourStars: Array<string>,
  // fiveStarts: Array<string>
// }
@Schema()
export class Raiting {
  @Prop()
  oneStars: Array<string>
  @Prop()
  twoStars:Array<string>
  @Prop()
  threeStars: Array<string>
  @Prop()
  fourStars: Array<string>
  @Prop()
  fiveStarts: Array<string>
}
export const RaitingSchema = SchemaFactory.createForClass(Raiting)
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
  checkIn: number | null;
  @Prop()
  checkOut: number | null;
  @Prop()
  image: Array<string>;
  @Prop()
  raiting: Raiting;
}
// const rating = {
  // oneStars: [],
  // twoStars: [],
  // threeStars: [],
  // fourStars: [],
  // fiveStarts: [],
// }

export const HouseSchema = SchemaFactory.createForClass(House);
