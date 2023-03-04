/* eslint-disable no-useless-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react';
import useDatePick from './useDatePick';
import { dateUnitToDateObj, isEqualDate } from '../utils/dateHelpers/index';

interface DayCellDate {
  year: number;
  month: number;
  day: number | false;
  isClose: boolean;
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

const useDayCell: UseDayCell = ({ year, month, day, isClose }) => {
  if (!day) {
    return {
      isSelected: false,
      isBetweenPickedDates: false,
      isFirstPickedDate: false,
      isSecondPickedDate: false,
      handleDay: () => {},
    };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [isFirstDate, setIsFirstDate] = useState<boolean>(false);
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

  const handleDay = () => {
    console.log(isClose);
    const curPickedDateUnit = { year, month, day };
    if (firstPickedDateUnit === null) {
      setPickedDateUnits({
        ...pickedDateUnits,
        firstPickedDateUnit: curPickedDateUnit,
      });
      return;
    }

    if (isClose) {
      setPickedDateUnits({
        ...pickedDateUnits,
        firstPickedDateUnit: curPickedDateUnit,
      });
      return;
    }

    if (secondPickedDateUnit === null) {
      setPickedDateUnits((prevPickedDateUnits) => {
        return {
          firstPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
          secondPickedDateUnit: curPickedDateUnit,
        };
      });
      return;
    }

    if (!isClose) {
      setPickedDateUnits((prevPickedDateUnits) => {
        return {
          firstPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
          secondPickedDateUnit: curPickedDateUnit,
        };
      });
      return;
    }

    // if (isClose) {
    //   console.log('aboba')
    //   if (secondPickedDateUnit === null) {
    //     setPickedDateUnits((prevPickedDateUnits) => {
    //       return {
    //         firstPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
    //         secondPickedDateUnit: curPickedDateUnit,
    //       };
    //     });
    //     return;
    //   }
    // }

    // if (startDate) {
    //   setPickedDateUnits({
    //     ...pickedDateUnits,
    //     firstPickedDateUnit: curPickedDateUnit,
    //   });
    //   return;
    // }

    // if (secondPickedDateUnit === null) {
    //   if (firstPickedDate > currentCellDate) {
    //     setPickedDateUnits((prevPickedDateUnits) => {
    //       return {
    //         firstPickedDateUnit: curPickedDateUnit,
    //         secondPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
    //       };
    //     });
    //   }
    // }
    // if (firstPickedDateUnit === null) {
    //   setPickedDateUnits({
    //     ...pickedDateUnits,
    //     firstPickedDateUnit: curPickedDateUnit,
    //   });
    // }
    // if (firstPickedDate > currentCellDate) {
    //   setPickedDateUnits((prevPickedDateUnits) => {
    //     return {
    //       firstPickedDateUnit: curPickedDateUnit,
    //       secondPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
    //     };
    //   });
    // }

    // if (secondPickedDateUnit === null) {
    //   if (firstPickedDate > currentCellDate) {
    //     setPickedDateUnits((prevPickedDateUnits) => {
    //       return {
    //         firstPickedDateUnit: curPickedDateUnit,
    //         secondPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
    //       };
    //     });
    //     return;
    //   }

    //   setPickedDateUnits({
    //     ...pickedDateUnits,
    //     secondPickedDateUnit: curPickedDateUnit,
    //   });
    //   return;
    // }

    // if (isEqualDate(currentCellDate, secondPickedDate)) {
    //   setPickedDateUnits({ ...pickedDateUnits, secondPickedDateUnit: null });
    //   return;
    // }

    // if (isEqualDate(firstPickedDate, currentCellDate)) {
    //   setPickedDateUnits((prevPickedDateUnits) => {
    //     return {
    //       firstPickedDateUnit: prevPickedDateUnits.secondPickedDateUnit
    //         ? pickedDateUnits.secondPickedDateUnit
    //         : null,
    //       secondPickedDateUnit: null,
    //     };
    //   });
    // }
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
