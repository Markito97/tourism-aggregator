/* eslint-disable import/no-cycle */
import Day from './Day';
import styles from './Days.module.css';

interface DaysProps {
  days: Array<Array<number | false>>;
}

export const Days = ({ days }: DaysProps): JSX.Element => {
  return (
    <div>
      {days.map((daysList, index) => {
        return (
          <div key={`${index + 1}`} className={styles.dateRows}>
            {daysList.map((day, index) => {
              return <Day key={`${index + 2}`} day={day} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
