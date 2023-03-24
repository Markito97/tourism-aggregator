import { useContext } from 'react';
import { useDatePick } from './useDatePick';
import { dateUnitToDateObj, isEqualDate } from '../utils/dateHelpers/index';
import { FieldsContext } from '../context/DateContext';

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
    handleDay: () => void;
  };
}

const useDayCell: UseDayCell = ({ year, month, day }) => {
  if (!day) {
    return {
      isSelected: false,
      isBetweenPickedDates: false,
      isFirstPickedDate: false,
      isSecondPickedDate: false,
      handleDay: () => {},
    };
  }

  const fieldContext = useContext(FieldsContext);

  const [pickedDateUnits, setPickedDateUnits] = useDatePick();
  const { firstPickedDateUnit, secondPickedDateUnit } = pickedDateUnits;

  const firstPickedDate = dateUnitToDateObj(firstPickedDateUnit);
  const secondPickedDate = dateUnitToDateObj(secondPickedDateUnit);
  const currentCellDate = dateUnitToDateObj({ year, month, day });

  const isSelected =
    isEqualDate(firstPickedDate, currentCellDate) || isEqualDate(secondPickedDate, currentCellDate);

  const isBetweenPickedDates =
    firstPickedDate <= currentCellDate &&
    currentCellDate <= secondPickedDate &&
    firstPickedDate &&
    secondPickedDate >= currentCellDate;

  const isFirstPickedDate = isEqualDate(currentCellDate, firstPickedDate);
  const isSecondPickedDate = isEqualDate(currentCellDate, secondPickedDate);

  const handleDay = () => {
    const curPickedDateUnit = { year, month, day };
    if (fieldContext?.isCheckIn) {
      if (firstPickedDateUnit === null) {
        setPickedDateUnits({
          ...pickedDateUnits,
          firstPickedDateUnit: curPickedDateUnit,
        });
        return;
      }

      if (secondPickedDateUnit === null) {
        if (firstPickedDate < currentCellDate) {
          setPickedDateUnits((prev) => {
            return {
              firstPickedDateUnit: prev.firstPickedDateUnit,
              secondPickedDateUnit: curPickedDateUnit,
            };
          });
          return;
        } else {
          setPickedDateUnits((prev) => {
            return {
              firstPickedDateUnit: curPickedDateUnit,
              secondPickedDateUnit: null,
            };
          });
          return;
        }
      }

      if (fieldContext?.isClose) {
        setPickedDateUnits({
          ...pickedDateUnits,
          firstPickedDateUnit: curPickedDateUnit,
        });
        return;
      }

      if (!fieldContext?.isClose) {
        if (firstPickedDate < currentCellDate) {
          setPickedDateUnits((prev) => {
            return {
              firstPickedDateUnit: prev.firstPickedDateUnit,
              secondPickedDateUnit: curPickedDateUnit,
            };
          });
          return;
        } else {
          setPickedDateUnits((prev) => {
            return {
              firstPickedDateUnit: curPickedDateUnit,
              secondPickedDateUnit: null,
            };
          });
          return;
        }
      }
      return;
    }

    if (fieldContext?.isCheckOut) {
      if (firstPickedDateUnit === null) {
        setPickedDateUnits((prevPickedDateUnits) => {
          return {
            firstPickedDateUnit: curPickedDateUnit,
            secondPickedDateUnit: prevPickedDateUnits.secondPickedDateUnit,
          };
        });
        return;
      }

      if (secondPickedDateUnit === null) {
        if (firstPickedDate < currentCellDate) {
          setPickedDateUnits((prev) => {
            return {
              firstPickedDateUnit: prev.firstPickedDateUnit,
              secondPickedDateUnit: curPickedDateUnit,
            };
          });
          return;
        } else {
          setPickedDateUnits((prev) => {
            return {
              firstPickedDateUnit: curPickedDateUnit,
              secondPickedDateUnit: null,
            };
          });
          return;
        }
      }

      if (fieldContext?.isClose) {
        if (currentCellDate < firstPickedDate) {
          setPickedDateUnits((prev) => {
            return {
              firstPickedDateUnit: curPickedDateUnit,
              secondPickedDateUnit: null,
            };
          });
        } else {
          setPickedDateUnits({
            ...pickedDateUnits,
            secondPickedDateUnit: curPickedDateUnit,
          });
          return;
        }
      }

      // if (firstPickedDateUnit === null) {
      //   setPickedDateUnits((prevPickedDateUnits) => {
      //     return {
      //       firstPickedDateUnit: curPickedDateUnit,
      //       secondPickedDateUnit: prevPickedDateUnits.secondPickedDateUnit,
      //     };
      //   });
      //   return;
      // }

      // if (!fieldContext?.isClose) {
      //   setPickedDateUnits((prevPickedDateUnits) => {
      //     return {
      //       firstPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
      //       secondPickedDateUnit: curPickedDateUnit,
      //     };
      //   });
      //   return;
      // }
      // return;
    }
  };

  return {
    isSelected,
    isBetweenPickedDates,
    isFirstPickedDate,
    isSecondPickedDate,
    handleDay,
  };
};

export default useDayCell;
