/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-sequences */
import { IHouse } from '../services/houses.service';

export class CreateHouseDto {
  id: string;

  name: string;

  description: string;

  location: string;

  price: string;

  image: Array<string>;

  constructor(data: IHouse) {
    (this.name = data.name),
      (this.id = data._id),
      (this.description = data.description);
    this.location = data.location;
    this.price = data.price;
    this.image = data.image;
  }
}
