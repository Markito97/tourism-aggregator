import { memo, useContext } from 'react';
import useDayCell from '../../hooks/useDay';
import { YearMonthContext } from '../../context/DateContext';
import { checkIsPreviousDay } from '../../utils/dateHelpers/checkIsPreviosDay';
import { DisablePreviousDaysContext } from './DatePicker';
import styles from './Day.module.css';

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
        // onKeyDown={onKeyUpDayCell}
        className={
          isPreviousDaysDisabled && isPreviousDay
            ? `${styles.disabled}`
            : isSecondPickedDate
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
