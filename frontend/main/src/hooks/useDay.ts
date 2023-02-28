/* eslint-disable operator-linebreak */
import useDatePick from './useDatePick';
import { dateUnitToDateObj, isEqualDate } from '../utils/dateHelpers/index';

interface DayCellDate {
  year: number;
  month: number;
  day: number | false;
}

interface UseDayCell {
  (date: DayCellDate): {
    isSelected: boolean;
    isBetweenPickedDates: boolean;
    isFirstPickedDate: boolean;
    isSecondPickedDate: boolean;
    onClickDayCell: () => void;
  };
}

const useDayCell: UseDayCell = ({ year, month, day }) => {
  if (!day) {
    return {
      isSelected: false,
      isBetweenPickedDates: false,
      isFirstPickedDate: false,
      isSecondPickedDate: false,
      onClickDayCell: () => {},
    };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pickedDateUnits, setPickedDateUnits] = useDatePick();
  const { firstPickedDateUnit, secondPickedDateUnit } = pickedDateUnits;

  const firstPickedDate = dateUnitToDateObj(firstPickedDateUnit);
  const secondPickedDate = dateUnitToDateObj(secondPickedDateUnit);
  const currentCellDate = dateUnitToDateObj({ year, month, day });

  const isSelected =
    isEqualDate(firstPickedDate, currentCellDate) ||
    isEqualDate(secondPickedDate, currentCellDate);

  // eslint-disable-next-line max-len
  const isBetweenPickedDates =
    firstPickedDate <= currentCellDate && currentCellDate <= secondPickedDate;

  const isFirstPickedDate = isEqualDate(currentCellDate, firstPickedDate);
  const isSecondPickedDate = isEqualDate(currentCellDate, secondPickedDate);

  const onClickDayCell = () => {
    const curPickedDateUnit = { year, month, day };

    if (firstPickedDateUnit === null) {
      setPickedDateUnits({
        ...pickedDateUnits,
        firstPickedDateUnit: curPickedDateUnit,
      });
      return;
    }

    if (secondPickedDateUnit === null) {
      if (firstPickedDate > currentCellDate) {
        setPickedDateUnits((prevPickedDateUnits) => {
          return {
            firstPickedDateUnit: curPickedDateUnit,
            secondPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
          };
        });
        return;
      }

      setPickedDateUnits({
        ...pickedDateUnits,
        secondPickedDateUnit: curPickedDateUnit,
      });
      return;
    }

    if (isEqualDate(currentCellDate, secondPickedDate)) {
      setPickedDateUnits({ ...pickedDateUnits, secondPickedDateUnit: null });
      return;
    }

    if (isEqualDate(firstPickedDate, currentCellDate)) {
      setPickedDateUnits((prevPickedDateUnits) => {
        return {
          firstPickedDateUnit: prevPickedDateUnits.secondPickedDateUnit
            ? pickedDateUnits.secondPickedDateUnit
            : null,
          secondPickedDateUnit: null,
        };
      });
    }
  };

  return {
    isSelected,
    isBetweenPickedDates,
    isFirstPickedDate,
    isSecondPickedDate,
    onClickDayCell,
  };
};

export default useDayCell;
