/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import { resolverLink } from '../../utils/resolver';
import styles from './HousesFieldUnit.module.css';

export const HouseFieldUnit = ({ card }: any): JSX.Element => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        draggable={false}
        src={
          card.image[0] !== undefined
            ? `${resolverLink(card.image[0])}`
            : 'no image'
        }
      />
      <div className={styles.content}>
        <div className={styles.priceText}>{card.price}</div>
        <div>
          <button type="button" className={styles.cardBtn}>
            <Link className={styles.link} to={`/hotel/${card._id}`}>
              Detail
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
