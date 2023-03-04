/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import useDayCell from '../../hooks/useDay';
import {
  DisablePreviousDaysContext,
  YearMonthContext,
} from '../../context/DateContext';
import { checkIsPreviousDay } from '../../utils/dateHelpers/checkIsPreviosDay';
import { FieldsContext } from '../SearchPanel/SearchPanel';
import styles from './Day.module.css';

interface DayProps {
  day: number | false;
}

export const Day = ({ day }: DayProps): JSX.Element => {
  const [year, month] = useContext(YearMonthContext);
  const fieldsContext = useContext(FieldsContext);
  // console.log(fieldsContext);
  // console.log(fieldsContext.startDate);
  const { isSelected, isBetweenPickedDates, handleDay } = useDayCell({
    year,
    month,
    day,
    isClose: fieldsContext?.isClose,
  });
  // console.log(fieldsContext);
  const isPreviousDaysDisabled = useContext(DisablePreviousDaysContext);
  const isPreviousDay = checkIsPreviousDay({ year, month, day });

  return (
    <div>
      <div
        onClick={handleDay}
        // onKeyDown={onKeyUpDayCell}
        className={
          isPreviousDaysDisabled && isPreviousDay
            ? `${styles.disabled}`
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
