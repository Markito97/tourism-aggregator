/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import styles from './SearchPanel.module.css';
import { DatePicker } from '../DatePicker/DatePicker';

export const SeacrhPanel = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.textField}>
        <label className={styles.textLable} htmlFor="">
          Place
        </label>
        <input
          className={styles.contentFields}
          type="text"
          placeholder="Where"
        />
      </div>
      <div
        className={styles.textField}
        onClick={() => {
          return setIsShow(true);
        }}
      >
        <label className={styles.textLable} htmlFor="">
          Start date
        </label>
        <input
          className={styles.contentFields}
          type="text"
          placeholder="Start"
        />
      </div>
      <div className={styles.textField}>
        <label className={styles.textLable} htmlFor="">
          End date
        </label>
        <input className={styles.contentFields} type="text" placeholder="End" />
      </div>
      <button className={styles.searchBtn}>Search</button>
      {isShow && <DatePicker disablePreviousDays />}
    </div>
  );
};
