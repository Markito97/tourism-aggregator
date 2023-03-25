import { FC } from 'react';
import { Month } from './Month';
import styles from './DatePickerField.module.css';

interface DatePickerFieldProps {
  dates: { year: number; month: number }[];
}

export const DatePickerField: FC<DatePickerFieldProps> = ({ dates }) => {
  return (
    <div className={styles.datepicker__field}>
      {dates.map(({ year, month }) => (
        <Month key={`${year} ${month}`} year={year} month={month} />
      ))}
    </div>
  );
};
