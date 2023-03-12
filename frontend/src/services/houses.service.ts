import { makeAutoObservable } from 'mobx';
import { CreateHouseDto, IHouse } from '../dto/house.dto';

export class HousesService {
  houses: IHouse[] = [];
  withOutBooking: IHouse[] = [];

  constructor() {
    this.houses = [];
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

  getHouses = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3001/houses');
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
      const formData = new FormData();
      images.forEach((img) => {
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

  get freeHouses(): Array<IHouse> {
    return this.withOutBooking;
  }
}
