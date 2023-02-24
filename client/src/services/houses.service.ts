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

  createHouse = async (house: any, images: Array<File>) => {
    console.log(house)
    const requestUrl = 'http://localhost:3001/houses/createHouse'
    const formData: any = new FormData()
    images.forEach((img) => {
      formData.append('images', img)
    })
    formData.append('house', JSON.stringify({ ...house }))
    const response = await fetch(requestUrl, {
      method: 'POST',
      body: formData,
    })
    return response
  }

  removeHouse = () => {}

  getHouses = async () => {
    const requestUrl = 'http://localhost:3001/houses/all'
    const response = await fetch(requestUrl).then((response) => response.json())
    this.houses = response
  }

  get allHouses() {
    return this.houses
  }

  // хз пока как загружать эти дома // целиком или по отдельности
  // load() {
  //   fetch('http://localhost:3001/houses/allHouses')
  //     .then((res) => res.json())
  //     .then((data: IHouse[]) => (houseService.houses = data))
  // }
}
