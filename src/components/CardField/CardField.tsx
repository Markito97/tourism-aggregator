import React from 'react'
import { CardProduct } from './CardProduct'
import styles from './CardField.module.css'

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

export const CardField = ({ products }: CardFieldProps): JSX.Element => {
  return (
    <div className={styles.content}>
      {products.map((card) => (
        <CardProduct key={card.image} card={card} />
      ))}
    </div>
  )
}
