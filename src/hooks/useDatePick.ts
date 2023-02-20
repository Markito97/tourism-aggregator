import {
  PickedDateUnits,
  PickedDateUnitsContext,
  PickedDateUnitsDispatch,
  PickedDateUnitsDispatchContext,
} from '../context/DateContext'
import { useContext } from 'react'

export const useDatePick = (): [PickedDateUnits, PickedDateUnitsDispatch] => {
  const pickedDateUnits = useContext(PickedDateUnitsContext)
  const setPickedDateUnits = useContext(PickedDateUnitsDispatchContext)

  if (!pickedDateUnits || !setPickedDateUnits) {
    throw new Error('DatePick Error')
  }

  return [pickedDateUnits, setPickedDateUnits]
}
