import React, { useContext, memo } from 'react'
import { YearMonthContext } from '../../components/DatePicker/Month'
import { useDayCell } from '../../hooks/useDay'
import { DisablePreviousDaysContext } from '../../components/DatePicker/DatePicker'
import { checkIsPreviousDay } from '../../utils/dateHelpers/checkIsPreviosDay'
import styles from './Day.module.css'

interface DayProps {
  day: number | false
}

function Day({ day }: DayProps): JSX.Element {
  const [year, month] = useContext(YearMonthContext)

  const {
    isSelected,
    isBetweenPickedDates,
    isFirstPickedDate,
    isSecondPickedDate,
    onClickDayCell,
  } = useDayCell({ year, month, day })
  const isPreviousDaysDisabled = useContext(DisablePreviousDaysContext)
  const isPreviousDay = checkIsPreviousDay({ year, month, day })
  console.log(isSelected)
  console.log(isBetweenPickedDates)
  console.log(isFirstPickedDate)

  const onKeyUpDayCell = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key !== 'Enter') {
      return
    }

    onClickDayCell()
  }

  return (
    <div
      className={isBetweenPickedDates ? `${styles.selected}` : ''}
      onClick={onClickDayCell}
      onKeyDown={onKeyUpDayCell}
    >
      {day}
    </div>
  )
}

export default memo(Day)
