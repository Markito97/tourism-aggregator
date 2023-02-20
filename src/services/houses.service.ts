import { makeAutoObservable } from 'mobx'

interface IHouse {
  price: string | null
  name: string | null
  location: string | null
  image: string | null
}

export class HousesService {
  houses: IHouse[] = []

  constructor() {
    this.houses = []
    makeAutoObservable(this)
  }

  setData = (data: any) => {
    this.houses = data
  }

  addHouse = () => {}

  removeHouse = () => {}

  get getHouses() {
    return this.houses
  }

  get getHouse() {
    return
  }

  // хз пока как загружать эти дома // целиком или по отдельности
  // load() {
  //   fetch('http://localhost:3001/houses/allHouses')
  //     .then((res) => res.json())
  //     .then((data: IHouse[]) => (houseService.houses = data))
  // }
}
