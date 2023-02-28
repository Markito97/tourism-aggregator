import { useContext } from 'react';
import {
  PickedDateUnits,
  PickedDateUnitsContext,
  PickedDateUnitsDispatch,
  PickedDateUnitsDispatchContext,
} from '../context/DateContext';

const useDatePick = (): [PickedDateUnits, PickedDateUnitsDispatch] => {
  const pickedDateUnits = useContext(PickedDateUnitsContext);
  const setPickedDateUnits = useContext(PickedDateUnitsDispatchContext);

  if (!pickedDateUnits || !setPickedDateUnits) {
    throw new Error('DatePick Error');
  }

  return [pickedDateUnits, setPickedDateUnits];
};

export default useDatePick;
