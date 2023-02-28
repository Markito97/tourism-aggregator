import { makeAutoObservable } from 'mobx';
import { resolverLink } from '../utils/resolver';
// eslint-disable-next-line import/no-cycle
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

  createHouse = async (house: any, images: Array<File>) => {
    const formData: any = new FormData();
    images.forEach((img) => {
      formData.append('images', img);
    });
    formData.append('house', JSON.stringify({ ...house }));
    return fetch(resolverLink('houses/createHouse'), {
      method: 'POST',
      body: formData,
    });
  };

  getHouses = async (): Promise<void> => {
    try {
      const response = await fetch(resolverLink('houses/all'));
      const data = await response.json();
      this.houses = data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  getHouse = async (id: string) => {
    try {
      const response = await fetch(resolverLink(`houses/${id}`));
      const data = await response.json();
      return new CreateHouseDto(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  get allHouses(): Array<IHouse> {
    return this.houses;
  }
}
