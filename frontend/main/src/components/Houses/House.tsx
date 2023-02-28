import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../context/ServiceContext';
import { IHouse } from '../../services/houses.service';
import styles from './House.module.css';

export const House = () => {
  const { id } = useParams();
  const { houses } = useContext(ServiceContext);
  const [house, setHouse] = useState<IHouse>();

  useEffect(() => {
    const fetchHouse = async () => {
      const data = await houses.getHouse(id);
      if (!data) return;
      setHouse(data);
    };
    fetchHouse();
  }, [id, houses]);

  if (!house) return null;
  return (
    <div className={styles.houseUnit}>
      <h1 className={styles.houseUnitTitle}>{house.name}</h1>
      <div className={styles.houseUnitHeader}>
        <div className={styles.imageContainer}>
          <img src={`http://localhost:3001/${house.image[0]}`} alt="" />
        </div>
        <div className={styles.untiInfo}>
          <h6 className={styles.unitInfoTitle}>Price 4500</h6>
          <button type="button" className={styles.unitBooking}>
            booking
          </button>
        </div>
      </div>
      <div className={styles.unitDescription}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aspernaturrerum, quisquam neque dignissimos omnis, adipisci alias
        accusamusveritatis unde quas quia voluptatibus ducimus in temporibus
        cupiditate molestiae hic? Ab, praesentium?
      </div>
      <div className={styles.unitIncludes}>
        <h6 className={styles.unitIncludesTitle}>Include</h6>
        <ul className={styles.unitIncludesList}>
          <li>2 beds</li>
          <li>bath</li>
          <li>shower</li>
        </ul>
      </div>
      <div style={{ width: '100%' }}>
        <img style={{ width: '100%', paddingTop: '30px' }} alt="" />
      </div>
      <div className={styles.unitContacts}>
        <h6 className={styles.unitIncludesTitle}>Contacts</h6>
        <ul className={styles.unitIncludesList}>
          <li className={styles.listUnit}>8-800-555-35-35</li>
        </ul>
      </div>
    </div>
  );
};
