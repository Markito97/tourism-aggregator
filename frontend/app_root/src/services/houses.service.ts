import { makeAutoObservable } from 'mobx'
import { resolverLink } from '../utils/resolver'

export interface IHouse {
  _id: string
  name: string
  description: string
  location: string
  price: string
  image: Array<string>
}

class CreateHouseDto {
  id: string
  name: string
  description: string
  location: string
  price: string
  image: Array<string>
  constructor(data: IHouse) {
    ;(this.name = data.name),
      (this.id = data._id),
      (this.description = data.description)
    this.location = data.location
    this.price = data.price
    this.image = data.image
  }
}

export class HousesService {
  houses: IHouse[] = []

  constructor() {
    this.houses = []
    makeAutoObservable(this)
  }

  createHouse = async (house: any, images: Array<File>) => {
    const formData: any = new FormData()
    images.forEach((img) => {
      formData.append('images', img)
    })
    formData.append('house', JSON.stringify({ ...house }))
    return await fetch(resolverLink('houses/createHouse'), {
      method: 'POST',
      body: formData,
    })
  }

  removeHouse = () => {}

  getHouses = async (): Promise<void> => {
    try {
      const response = await fetch(resolverLink('houses/all'))
      const data = await response.json()
      return (this.houses = data)
    } catch (error) {
      console.log(error)
    }
  }

  getHouse = async (id: string) => {
    try {
      const response = await fetch(resolverLink(`houses/${id}`))
      const data = await response.json()
      return new CreateHouseDto(data)
    } catch (error) {
      console.log(error)
    }
  }

  get allHouses(): Array<IHouse> {
    return this.houses
  }

  
}
