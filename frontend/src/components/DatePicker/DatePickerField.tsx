import { FC } from 'react';
import { Month } from './Month';
import styles from './DatePickerField.module.css';

interface DatePickerFieldProps {
  dates: { year: number; month: number }[];
}

export const DatePickerField: FC<DatePickerFieldProps> = (props) => {
  return (
    <div className={styles.datepicker__field}>
      {props.dates.map(({ year, month }) => (
        <Month key={`${year} ${month}`} year={year} month={month} />
      ))}
    </div>
  );
};
