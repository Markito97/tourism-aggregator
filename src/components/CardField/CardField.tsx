import React, { useContext } from 'react'
import { CardProduct } from './CardProduct'
import styles from './CardField.module.css'
import { observer } from 'mobx-react-lite'
import { ServiceContext } from '../../context/ServiceContext'

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
    const { houses } = useContext(ServiceContext)

    console.log(houses)

    return (
      <div className={styles.content}>
        {products.map((card) => (
          <CardProduct key={card.image} card={card} />
        ))}
      </div>
    )
  }
)
