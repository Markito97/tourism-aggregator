import { useMemo } from 'react';
import { YearMonthContext } from 'main/src/context/DateContext';
import {
  getMonthData,
  getYearMonth,
  WEEK_DAYS,
} from '../../utils/dateHelpers/index';
import { Days } from './Days';
import styles from './Month.module.css';

interface MonthProps {
  year: number;
  month: number;
}

export const Month = ({ year, month }: MonthProps): JSX.Element => {
  const days = useMemo(() => {
    return getMonthData(year, month);
  }, [year, month]);
  const value = useMemo(() => {
    return [year, month];
  }, [year, month]);

  return (
    <YearMonthContext.Provider value={value}>
      <div className={styles.container}>
        <div className={styles.header}>{getYearMonth(year, month)}</div>

        <div className={styles.weekDays}>
          {WEEK_DAYS.map((weekDay) => {
            return <div key={`${weekDay}`}>{weekDay}</div>;
          })}
        </div>

        <div className={styles.datesContent}>
          <Days days={days} />
        </div>
      </div>
    </YearMonthContext.Provider>
  );
};
