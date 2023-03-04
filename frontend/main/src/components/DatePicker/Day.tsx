/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
import { memo, useContext } from 'react';
import useDayCell from '../../hooks/useDay';
import { YearMonthContext } from '../../context/DateContext';
import { checkIsPreviousDay } from '../../utils/dateHelpers/checkIsPreviosDay';
import { FieldsContext } from '../SearchPanel/SearchPanel';
import styles from './Day.module.css';
import { DisablePreviousDaysContext } from './DatePicker';

interface DayProps {
  day: number | false;
}

const Day = ({ day }: DayProps): JSX.Element => {
  const [year, month] = useContext(YearMonthContext);
  const fieldsContext = useContext(FieldsContext);
  const { isSelected, isBetweenPickedDates, handleDay } = useDayCell({
    year,
    month,
    day,
    isClose: fieldsContext?.isClose,
  });
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

export default memo(Day);
