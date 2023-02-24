import { v4 as uuidv4 } from 'uuid'
import Card1 from '@assets/Card1.jpg'
import Card2 from '@assets/Card2.jpg'
import Card3 from '@assets/Card3.jpg'
import Card4 from '@assets/Card4.jpg'
import Card5 from '@assets/Card5.jpg'

import PCard from '@assets/PCard.jpg'
import PCard1 from '@assets/PCard1.jpg'
import PCard2 from '@assets/PCard2.jpg'
import PCard3 from '@assets/PCard3.jpg'

const sequensor = (hotels: any) => {
  return hotels.map((hotel: any) => ({
    ...hotel,
    id: uuidv4(),
  }))
}

const hotelsFirstLakes = [
  {
    image: Card1,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    image: Card2,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    image: Card3,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    image: Card4,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    id: 5,
    image: Card5,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
]

const hotelsSecondLakes = [
  {
    image: PCard,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    image: PCard1,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    image: PCard2,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    image: PCard3,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
  {
    image: 'not found',
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, veniam mollitia ex iure qui eos hic, libero ipsa facere esse aliquid accusantium delectus sequi ipsam doloremque totam. Corporis, esse!',
    price: 1000,
  },
]

export const productsFirsLake = sequensor(hotelsFirstLakes)
export const productsSecondLake = sequensor(hotelsSecondLakes)
