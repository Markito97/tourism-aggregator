import { FC } from 'react';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';
import styles from './DatePickerHeader.module.css';
import { PickedDateUnit } from 'src/context/DateContext';
import { getDDMMYYYY } from '../../utils/dateHelpers/getDDMMYYYY';

interface DatePickerHeaderProps {
  checkIn: PickedDateUnit | null;
  checkOut: PickedDateUnit | null;
  className: string;
  isModal: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const DatePickerHeader: FC<DatePickerHeaderProps> = ({
  checkIn,
  checkOut,
  className,
  isModal,
  onPrev,
  onNext,
}) => {
  const formatCheckIn = !checkIn
    ? 'CheckIn'
    : getDDMMYYYY(checkIn.day, checkIn.month, checkIn.year);
  const formatCheckOut = !checkOut
    ? 'CheckOut'
    : getDDMMYYYY(checkOut.day, checkOut.month, checkOut.year);

  return (
    <div className={styles[className]}>
      <ChevronLeft onClick={onPrev} />
      {isModal && (
        <>
          <div>{formatCheckIn}</div> - <div>{formatCheckOut}</div>
        </>
      )}
      <ChevronRight onClick={onNext} />
    </div>
  );
};
