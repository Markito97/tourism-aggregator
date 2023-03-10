import { makeAutoObservable } from 'mobx';
import { CreateHouseDto } from '../dto/house.dto';

export interface IHouse {
  _id: string;
  name: string;
  description: string;
  location: string;
  price: string;
  image: Array<string>;
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

  bookingHouse = async (id: string, house: any) => {
    try {
      const response = await fetch(`http://localhost:3001/houses/${id}`, {
        method: 'PUT',
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
