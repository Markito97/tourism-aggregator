import { memo, useContext } from 'react';
import styles from './Day.module.css';
import useDayCell from '../../hooks/useDay';
import { checkIsPreviousDay } from '../../utils/dateHelpers/checkIsPreviousDay';
import { DisablePreviousDaysContext, YearMonthContext } from '../../context/DateContext';

interface DayProps {
  day: number | false;
}

const Day = ({ day }: DayProps): JSX.Element => {
  const [year, month] = useContext(YearMonthContext);
  const { isSelected, isFirstPickedDate, isSecondPickedDate, isBetweenPickedDates, handleDay } =
    useDayCell({
      year,
      month,
      day,
    });
  const isPreviousDaysDisabled = useContext(DisablePreviousDaysContext);
  const isPreviousDay = checkIsPreviousDay(year, month, day);

  return (
    <div>
      <div
        onClick={handleDay}
        className={
          isPreviousDaysDisabled && isPreviousDay
            ? `${styles.disabled}`
            : // : isBooking
            // ? `${styles.isBooking}`
            isSecondPickedDate
            ? `${styles.selected}`
            : isFirstPickedDate
            ? `${styles.selected}`
            : isBetweenPickedDates
            ? `${styles.range}`
            : `${styles.dayCell}`
        }
      >
        {day}
      </div>
    </div>
  );
};

export default memo(Day);
