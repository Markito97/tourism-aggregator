/* eslint-disable react/button-has-type */
import { Link, Outlet } from 'react-router-dom';
import styles from './HousesList.module.css';

export const HousesList = () => {
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: '35px' }}>Houses List</div>
      <div className={styles.list}>
        <div style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <div className={styles.listItem}>
            <div>1</div>
            <div>Название</div>
            <div>Локация</div>
            <div>Описание</div>
            <div>Цена</div>
            <div>X</div>
          </div>
        </div>
        <div style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <div className={styles.listItem}>
            <div>1</div>
            <div>Название</div>
            <div>Локация</div>
            <div>Описание</div>
            <div>Цена</div>
            <div>X</div>
          </div>
        </div>
        <div style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <div className={styles.listItem}>
            <div>1</div>
            <div>Название</div>
            <div>Локация</div>
            <div>Описание</div>
            <div>Цена</div>
            <div>X</div>
          </div>
        </div>
      </div>
      {/* <button> */}
      <Outlet />
      <Link to="/houseslist/aboba">Form</Link>
      {/* </button> */}
    </div>
  );
};
