import React from 'react'
import styles from './CardProduct.module.css'
import { Link } from 'react-router-dom'
import { IProduct } from './CardField'

interface CardProductProps {
  card: IProduct
}

export const CardProduct = ({ card }: CardProductProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} draggable={false} src={card.image} />
      <div className={styles.content}>
        <div className={styles.priceText}>Price</div>
        <div>
          <button className={styles.cardBtn}>
            <Link to={'/product'}>Paid</Link>
          </button>
        </div>
      </div>
      <div className={styles.shortDesc}>Short Description</div>
    </div>
  )
}
