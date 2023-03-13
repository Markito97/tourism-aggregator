/* eslint-disable import/order */
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './HousesFiled..module.css';
import { ServiceContext } from '../../context/ServiceContext';
import { HouseFieldUnit } from './HouseFieldUnit';

export const HousesField = observer((): JSX.Element | null => {
  const { houses } = useContext(ServiceContext);

  useEffect(() => {
    houses.getHouses();
  }, []);

  if (!houses.allHouses) return null;
  return (
    <div className={styles.content}>
      {!houses.freeHouses.length
        ? houses.allHouses.map((card: { image: any }, index: any) => (
            <HouseFieldUnit key={card._id} card={card} />
          ))
        : houses.freeHouses.map((card: { image: any }, index: any) => (
            <HouseFieldUnit key={card._id} card={card} />
          ))}
    </div>
  );
});
