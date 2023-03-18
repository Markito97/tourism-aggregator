import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { HydratedDocument } from "mongoose";

export type HouseDocument = HydratedDocument<House>;
export type RatingDocument = HydratedDocument<Rating>;
export type BookingDocument = HydratedDocument<Booking>;

export class Booking {
  @Prop()
  checkIn: number | null;
  @Prop()
  checkOut: number | null;
}

export class Rating {
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

export const RaitingSchema = SchemaFactory.createForClass(Rating);

@Schema()
export class House {
  @Prop()
  houseName: string;
  @Prop()
  address: string;
  @Prop()
  lake: string;
  @Prop()
  price: string;
  @Prop()
  persons: string;
  @Prop()
  geoData: string;
  @Prop()
  booking: [Booking];
  @Prop()
  image: Array<string>;
  @Prop()
  rating: Rating;
}
// const rating = {
// oneStars: [],
// twoStars: [],
// threeStars: [],
// fourStars: [],
// fiveStarts: [],
// }

export const HouseSchema = SchemaFactory.createForClass(House);
