import React from 'react'
import { CardProduct } from './Card/CardProduct'
import Card1 from '../../assets/resource/Card1.jpg'
import Card2 from '../../assets/resource/Card2.jpg'
import Card3 from '../../assets/resource/Card3.jpg'
import Card4 from '../../assets/resource/Card4.jpg'
import styles from './CardField.module.css'

const cards = [
  { image: Card1 },
  { image: Card2 },
  { image: Card3 },
  { image: Card4 },
]

export const CardField = (): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className={styles.content}>
        {cards.map((card) => (
          <CardProduct key={card.image} card={card} />
        ))}
      </div>

      <button className={styles.contentView}>View More</button>
    </div>
  )
}
