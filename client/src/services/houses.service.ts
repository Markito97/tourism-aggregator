import { makeAutoObservable } from 'mobx'

interface IHouse {
  price: string
  name: string
  location: string
  image: string
}

class HousesService {
  houses: IHouse[] = []

  constructor() {
    this.houses = []

    makeAutoObservable(this)
  }

  setData = (data: any) => {
    this.houses = data
  }

  get getHouses() {
    return this.houses
  }

  load() {
    fetch('http://localhost:3001/houses/allHouses')
      .then((res) => res.json())
      .then((data: IHouse[]) => (houseService.houses = data))
  }
}

const houseService = new HousesService()
export default houseService
