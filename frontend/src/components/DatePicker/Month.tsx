import { FC, useMemo } from 'react';
import { Days } from './Days';
import styles from './Month.module.css';
import { YearMonthContext } from '../../context/DateContext';
import { WEEK_DAYS, getMonthData, getYearMonth } from '../../utils/dateHelpers';

interface MonthProps {
  year: number;
  month: number;
}

export const Month: FC<MonthProps> = ({ year, month }): JSX.Element => {
  const days = useMemo(() => {
    return getMonthData(year, month);
  }, [year, month]);
  const value = useMemo(() => {
    return [year, month];
  }, [year, month]);

  return (
    <YearMonthContext.Provider value={value}>
      <div className={styles.month__container}>
        <div className={styles.month__header}>{getYearMonth(year, month)}</div>
        <div className={styles.month__weekdays}>
          {WEEK_DAYS.map((weekday) => (
            <div key={`${weekday}`}>{weekday}</div>
          ))}
        </div>
        <Days days={days} />
      </div>
    </YearMonthContext.Provider>
  );
};
