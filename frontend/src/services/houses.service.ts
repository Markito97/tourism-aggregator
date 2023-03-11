import { makeAutoObservable } from 'mobx';
import { CreateHouseDto } from '../dto/house.dto';

export interface IHouse {
  _id: string;
  houseName: string;
  location: string;
  price: string;
  image: Array<string>;
  checkIn?: number | null;
  checkOut?: number | null;
  adress: string;
  lake: string;
  persons?: string | undefined;
  geoData?: string | undefined;

}

export class HousesService {
  houses: IHouse[] = [];

  constructor() {
    this.houses = [];
    makeAutoObservable(this);
  }

  getFreeHouses = async () => {
    try {
    } catch (error: any) {
      throw new Error(error);
    }
  };

  getHouses = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3001/houses/all');
      const data = await response.json();
      this.houses = data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  getHouse = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/houses/${id}`);
      const data = await response.json();
      return new CreateHouseDto(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  createHouse = async (images: Array<File>, house: any) => {
    try {
      if (!images) throw new Error('Is empty');
      const formData = new FormData();
      images.forEach((img) => {
        formData.append('images', img);
      });
      formData.append('house', JSON.stringify({ ...house }));
      const response = await fetch('http://localhost:3001/houses/createHouse', {
        method: 'POST',
        // mode: 'cors',
        // headers: {
        //   // 'Content-Type': 'application/json',
        //   'Content-Type': 'multipart/form-data',
        // },
        body: formData,
      });

      console.log(response.json());
    } catch (error: any) {
      throw new Error(error);
    }
  };

  bookingHouse = async (id: string, house: any) => {
    try {
      const response = await fetch(`http://localhost:3001/houses/${id}`, {
        method: 'PUT', //POST
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(house),
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  get allHouses(): Array<IHouse> {
    return this.houses;
  }
}
