import { Link } from 'react-router-dom';
import styles from './HousesFieldUnit.module.css';
import { toJS } from 'mobx';

export const HouseFieldUnit = ({ card }: any): JSX.Element => {
  console.log(toJS(card));

  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        draggable={false}
        src={
          card.image[0] !== undefined
            ? `http://localhost:3001/${card.image[0]}`
            : 'no image'
        }
        alt=""
      />
      <div className={styles.content}>
        <div className={styles.priceText}>{card.price}</div>
        <div>
          <button type="button" className={styles.cardBtn}>
            <Link className={styles.link} to={`/hotels/${card._id}`}>
              Detail
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
