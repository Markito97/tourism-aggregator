import styles from './CardProduct.module.css'
import { Link } from 'react-router-dom'
import { IProduct } from './CardField'

interface CardProductProps {
  card: IProduct
}

export const CardProduct = ({ card }: CardProductProps): JSX.Element => {
  console.log(card)
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        draggable={false}
        src={`http://localhost:3001/${card.image[0]}`}
      />
      <div className={styles.content}>
        <div className={styles.priceText}>{card.price}</div>
        <div>
          <button className={styles.cardBtn}>
            <Link to={`/hotel/${card.id}`}>Look</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
