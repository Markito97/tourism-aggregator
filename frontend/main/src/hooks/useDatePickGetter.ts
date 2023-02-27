import { PickedDateUnitsContext } from '../context/DateContext'
import { useContext } from 'react'
import { dateUnitToDateObj } from '../utils/dateHelpers/index'

export const useDatePickGetter = () => {
  const pickedDateUnits = useContext(PickedDateUnitsContext)
  if (!pickedDateUnits) throw new Error('DatePickGetter Error')
  const { firstPickedDateUnit, secondPickedDateUnit } = pickedDateUnits
  const pickedDates = {
    firstPickedDate: dateUnitToDateObj(firstPickedDateUnit),
    secondPickedDate: dateUnitToDateObj(secondPickedDateUnit),
  }

  return { pickedDateUnits, pickedDates }
}