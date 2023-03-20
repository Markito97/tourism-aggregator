import { makeAutoObservable } from 'mobx';
import { CreateHouseDto, IHouse } from '../dto/house.dto';
import { mockHouses } from '../mockdata/mockHouses';

export class HousesService {
  houses: IHouse[] = [];
  house = null;
  withOutBooking: IHouse[] = [];

  constructor() {
    this.houses = [];
    this.house;
    makeAutoObservable(this);
  }

  getFreeHouses = async (dateRange: any) => {
    try {
      const response = await fetch('http://localhost:3001/houses/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dateRange),
      });
      const data = await response.json();
      console.log(data);

      this.withOutBooking = data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  getHouses = async (): Promise<IHouse[]> => {
    try {
      const response = await fetch('http://localhost:3001/houses');
      const data = await response.json();
      this.houses = data;
      return data;
    } catch (error: any) {
      this.houses = mockHouses;
      throw new Error(error);
    }
  };

  getHouse = async (id: string) => {
    try {
      // const response = await fetch(`http://localhost:3001/houses/${id}`);
      // const data = await response.json();
      // const deserialize = new CreateHouseDto(data);
      // this.house = { ...deserialize };
      // return { ...deserialize };
      this.house = mockHouses.find((house) => house._id === id);
    } catch (error: any) {
      this.house = mockHouses.find((house) => house._id === id);
      throw new Error(error);
    }
  };

  createHouse = async (house: IHouse) => {
    try {
      const formData = new FormData();
      house.files?.forEach((img) => {
        formData.append('images', img);
      });
      formData.append('house', JSON.stringify({ ...house }));
      const response = await fetch('http://localhost:3001/houses/', {
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
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3001/houses/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(house),
      });
      const data = await response.json();
      const deserialize = new CreateHouseDto(data);
      this.house = { ...deserialize };
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  removeHouse = async (id: string): Promise<IHouse> => {
    try {
      this.houses = this.houses.filter((house) => house._id !== id);
      const response = await fetch(`http://localhost:3001/houses/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  get currentHouse() {
    return this.house;
  }

  get allHouses(): Array<IHouse> {
    return this.houses;
  }

  get freeHouses(): Array<IHouse> {
    return this.withOutBooking;
  }
}
