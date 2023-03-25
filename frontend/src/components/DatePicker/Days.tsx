import { FC } from 'react';
import Day from './Day';
import styles from './Days.module.css';

interface DaysProps {
  days: Array<Array<number | false>>;
}

export const Days: FC<DaysProps> = ({ days }): JSX.Element => {
  return (
    <div className={styles.days__container}>
      {days.map((daysField, index) => (
        <div key={`${index + 1}`} className={styles.days__row}>
          {daysField.map((day, index) => (
            <Day key={`${index + 2}`} day={day} />
          ))}
        </div>
      ))}
    </div>
  );
};
