/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { YearMonthContext } from './Month';
import useDayCell from '../../hooks/useDay';
import { DisablePreviousDaysContext } from '../../context/DateContext';
import { checkIsPreviousDay } from '../../utils/dateHelpers/checkIsPreviosDay';
import styles from './Day.module.css';

interface DayProps {
  day: number | false
}

export const Day = ({ day }: DayProps): JSX.Element => {
  const [year, month] = useContext(YearMonthContext);
  const {
    isSelected,
    isBetweenPickedDates,
    isFirstPickedDate,
    isSecondPickedDate,
    onClickDayCell,
  } = useDayCell({ year, month, day });
  const isPreviousDaysDisabled = useContext(DisablePreviousDaysContext);
  const isPreviousDay = checkIsPreviousDay({ year, month, day });
  // console.log(isFirstPickedDate, isSecondPickedDate)
  const onKeyUpDayCell = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key !== 'Enter') return;
    onClickDayCell();
  };

  return (
    <div>
      <div
        onClick={onClickDayCell}
        onKeyDown={onKeyUpDayCell}
        className={
          isPreviousDaysDisabled && isPreviousDay
            ? `${styles.disabled}`
            // eslint-disable-next-line no-nested-ternary
            : isSelected
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
