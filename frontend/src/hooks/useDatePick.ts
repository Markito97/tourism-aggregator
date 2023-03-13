import { useContext } from 'react';
import {
  PickedDateUnits,
  PickedDateUnitsContext,
  PickedDateUnitsDispatch,
  PickedDateUnitsDispatchContext,
} from '../context/DateContext';

export const useDatePick = (): [PickedDateUnits, PickedDateUnitsDispatch] => {
  const pickedDateUnits = useContext(PickedDateUnitsContext);
  const setPickedDateUnits = useContext(PickedDateUnitsDispatchContext);

  if (!pickedDateUnits || !setPickedDateUnits) {
    throw new Error('DatePick Error');
  }
  return [pickedDateUnits, setPickedDateUnits];
};

export type DatePick = ReturnType<typeof useDatePick>;
