import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { HydratedDocument } from "mongoose";

export type HouseDocument = HydratedDocument<House>;
export type RaitingDocument = HydratedDocument<Raiting>;

export class Raiting {
  @Prop()
  oneStar: Array<string>;
  @Prop()
  twoStar: Array<string>;
  @Prop()
  threeStar: Array<string>;
  @Prop()
  fourStar: Array<string>;
  @Prop()
  fiveStar: Array<string>;
}

export const RaitingSchema = SchemaFactory.createForClass(Raiting);

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
  rating: Raiting;
}
// const rating = {
  // oneStars: [],
  // twoStars: [],
  // threeStars: [],
  // fourStars: [],
  // fiveStarts: [],
// }

export const HouseSchema = SchemaFactory.createForClass(House);
