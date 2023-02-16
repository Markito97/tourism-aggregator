import { isEqual } from 'date-fns'

import { PickedDateUnit, useDatePick } from '../context/DateContext'

/* util */

const dateUnitToDateObj = (dateUnit: PickedDateUnit | null): Date | false => {
  if (!dateUnit) return false
  const { year, month, day } = dateUnit
  if (!day) return false
  return new Date(year, month - 1, day)
}

interface IsEqualDate {
  (date1: Date | null | false, date2: Date | null | false): boolean
}

const isEqualDate: IsEqualDate = (date1, date2) => {
  if (!date1 || !date2) {
    return false
  }

  return isEqual(date1, date2)
}

/* **** */

interface DayCellDate {
  year: number
  month: number
  day: number | false
}

interface UseDayCell {
  (date: DayCellDate): {
    isSelected: boolean
    isBetweenPickedDates: boolean
    isFirstPickedDate: boolean
    isSecondPickedDate: boolean
    onClickDayCell: () => void
  }
}

export const useDayCell: UseDayCell = ({ year, month, day }) => {
  if (!day) {
    return {
      isSelected: false,
      isBetweenPickedDates: false,
      isFirstPickedDate: false,
      isSecondPickedDate: false,
      onClickDayCell: () => {},
    }
  }

  const [pickedDateUnits, setPickedDateUnits] = useDatePick()
  const { firstPickedDateUnit, secondPickedDateUnit } = pickedDateUnits

  const firstPickedDate = dateUnitToDateObj(firstPickedDateUnit)
  const secondPickedDate = dateUnitToDateObj(secondPickedDateUnit)
  const currentCellDate = dateUnitToDateObj({ year, month, day })

  const isSelected =
    isEqualDate(firstPickedDate, currentCellDate) ||
    isEqualDate(secondPickedDate, currentCellDate)

  const isBetweenPickedDates =
    firstPickedDate <= currentCellDate && currentCellDate <= secondPickedDate

  const isFirstPickedDate = isEqualDate(currentCellDate, firstPickedDate)
  const isSecondPickedDate = isEqualDate(currentCellDate, secondPickedDate)

  const onClickDayCell = () => {
    const curPickedDateUnit = { year, month, day }

    if (firstPickedDateUnit === null) {
      setPickedDateUnits({
        ...pickedDateUnits,
        firstPickedDateUnit: curPickedDateUnit,
      })
      return
    }

    if (secondPickedDateUnit === null) {
      if (firstPickedDate > currentCellDate) {
        setPickedDateUnits((prevPickedDateUnits) => ({
          firstPickedDateUnit: curPickedDateUnit,
          secondPickedDateUnit: prevPickedDateUnits.firstPickedDateUnit,
        }))
        return
      }

      setPickedDateUnits({
        ...pickedDateUnits,
        secondPickedDateUnit: curPickedDateUnit,
      })
      return
    }

    if (isEqualDate(currentCellDate, secondPickedDate)) {
      setPickedDateUnits({ ...pickedDateUnits, secondPickedDateUnit: null })
      return
    }

    if (isEqualDate(firstPickedDate, currentCellDate)) {
      // firstPick을 다시 클릭하면 secondPick이 firstPick이 된다.
      setPickedDateUnits((prevPickedDateUnits) => ({
        firstPickedDateUnit: prevPickedDateUnits.secondPickedDateUnit
          ? pickedDateUnits.secondPickedDateUnit
          : null,
        secondPickedDateUnit: null,
      }))
    }
  }

  return {
    isSelected,
    isBetweenPickedDates,
    isFirstPickedDate,
    isSecondPickedDate,
    onClickDayCell,
  }
}
