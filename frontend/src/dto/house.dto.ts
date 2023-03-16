interface IBooking {
  checkIn: number;
  checkOut: number;
}

export interface IRating {
  oneStar: Array<string>;
  twoStar: Array<string>;
  threeStar: Array<string>;
  fourStar: Array<string>;
  fiveStar: Array<string>;
}

export interface IHouse {
  _id: string;
  houseName: string;
  address: string;
  lake: string;
  price: string;
  persons: string | undefined;
  geoData: string | undefined;
  booking: Array<IBooking>;
  checkout: number | null;
  image: Array<string>;
  files: Array<File> | undefined;
  rating: IRating;
}

export class CreateHouseDto {
  id: string;
  houseName: string;
  address: string;
  lake: string;
  price: string;
  persons: string | undefined;
  geoData: string | undefined;
  booking: Array<IBooking>;
  image: Array<string>;
  rating: IRating;
  constructor(house: IHouse) {
    this.id = house._id;
    this.houseName = house.houseName;
    this.address = house.address;
    this.lake = house.lake;
    this.price = house.price;
    this.persons = house.persons;
    this.geoData = house.geoData;
    this.booking = house.booking;
    this.image = house.image;
    this.rating = house.rating;
  }
}

export class HouseEdit {
  houseName: string;
  address: string;
  lake: string;
  price: string;
  persons: string | undefined;
  geoData: string | undefined;
  constructor(house: IHouse) {
    this.houseName = house.houseName;
    this.address = house.address;
    this.lake = house.lake;
    this.price = house.price;
    this.persons = house.persons;
    this.geoData = house.geoData;
  }
}
