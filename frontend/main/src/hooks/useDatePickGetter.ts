import { useContext } from 'react';
import { PickedDateUnitsContext } from '../context/DateContext';
import { dateUnitToDateObj } from '../utils/dateHelpers/index';

const useDatePickGetter = () => {
  const pickedDateUnits = useContext(PickedDateUnitsContext);
  if (!pickedDateUnits) throw new Error('DatePickGetter Error');
  const { firstPickedDateUnit, secondPickedDateUnit } = pickedDateUnits;
  const pickedDates = {
    firstPickedDate: dateUnitToDateObj(firstPickedDateUnit),
    secondPickedDate: dateUnitToDateObj(secondPickedDateUnit),
  };

  return { pickedDates, pickedDateUnits };
};

export default useDatePickGetter;
