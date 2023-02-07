import React from 'react'
import styles from './CardProduct.module.css'

interface ICard {
  image: string
}

interface CardProductProps {
  card: ICard
}

export const CardProduct = ({ card }: CardProductProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} draggable={false} src={card.image} />
      <div className={styles.content}>
        <div className={styles.priceText}>Price</div>
        <div>
          <button className={styles.cardBtn}>Paid</button>
        </div>
      </div>
      <div className={styles.shortDesc}>Short Description</div>
    </div>
  )
}
