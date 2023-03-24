import { FC } from 'react';
import { getYearMonth } from '../../utils/dateHelpers';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';
import styles from './DatePickerHeader.module.css';
import { PickedDateUnit } from 'src/context/DateContext';

interface DatePickerHeaderProps {
  checkIn: PickedDateUnit | null;
  checkOut: PickedDateUnit | null;
  onPrev: () => void;
  onNext: () => void;
}

export const DatePickerHeader: FC<DatePickerHeaderProps> = (props) => {
  return (
    <div style={{ height: '35px', display: 'flex', justifyContent: 'space-between' }}>
      <div className={styles.datepicker__header}>
        <div>
          {!props.checkIn ? 'CheckIn' : getYearMonth(props.checkIn.year, props.checkIn.month)}
        </div>
        -
        <div>
          {!props.checkOut ? 'CheckOut' : getYearMonth(props.checkOut.year, props.checkOut.month)}
        </div>
        <div style={{ display: 'flex', columnGap: '15px' }}>
          <ChevronLeft onClick={props.onPrev} />
          <ChevronRight onClick={props.onNext} />
        </div>
      </div>
    </div>
  );
};
