import { IHouse } from '../services/houses.service';

export class CreateHouseDto {
  id: string;
  houseName: string;
  location: string;
  price: string;
  image: Array<string>;
  adress: string;
  lake: string;
  persons: string | undefined;
  geoData: string | undefined;
  constructor(data: IHouse) {
    (this.houseName = data.houseName),
      (this.id = data._id),
      this.adress = data.adress;
      this.persons = data.persons;
      this.geoData = data.geoData;
      this.lake = data.lake;
      this.location = data.location;
      this.price = data.price;
      this.image = data.image;
  }
}
