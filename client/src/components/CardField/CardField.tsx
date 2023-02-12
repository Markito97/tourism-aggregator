import React from 'react'
import { CardProduct } from './CardProduct'
import styles from './CardField.module.css'
import houseService from '../../services/houses.service'
import { observer } from 'mobx-react-lite'

export interface IProduct {
  id: number
  image: string
  title: string
  description: string
  price: number
}

interface CardFieldProps {
  products: IProduct[]
}

export const CardField = observer(
  ({ products }: CardFieldProps): JSX.Element => {
    const houses = houseService.houses.map((house) => console.log(house))

    return (
      <div className={styles.content}>
        {products.map((card) => (
          <CardProduct key={card.image} card={card} />
        ))}
      </div>
    )
  }
)
