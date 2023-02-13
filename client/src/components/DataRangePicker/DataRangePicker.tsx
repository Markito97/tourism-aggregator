import { useCalendar } from '../../hooks/useCalendar'
import React, { FC } from 'react'
import { checkDateIsEqual } from '../../utils/date/index'

import styles from './DataRangePicker.module.css'
import { ChevronLeft } from '../../assets/icons/ChevronLeft'
import { ChevronRight } from '../../assets/icons/ChevronRight'

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
  firstWeekDayNumber?: number
}

export const DataRangePicker: FC<CalendarProps> = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  })

  console.log(state)

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar__header}>
        <ChevronLeft onClick={() => functions.onClickArrow('left')} />
        <div>
          {state.monthesNames[state.selectedMonth.monthIndex].month}
          {state.selectedYear}
        </div>
        <ChevronRight onClick={() => functions.onClickArrow('right')} />
      </div>
      <div className="calendar__body">
        <>
          <div className={styles.calendarDaysNames}>
            {state.weekDaysNames.map((weekDaysName) => (
              <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
            ))}
          </div>
          <div style={{ paddingTop: '25px' }}>
            <div className={styles.calendarDays}>
              {state.calendarDays.map((day) => {
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date
                )

                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    onClick={() => {
                      functions.setSelectedDay(day)
                      selectDate(day.date)
                    }}
                    className={[
                      `${styles.calendarDay}`,
                      isSelectedDay ? `${styles.calendarSelected}` : '',
                      isAdditionalDay ? 'calendar__additional__day' : '',
                    ].join(' ')}
                  >
                    {day.dayNumber}
                  </div>
                )
              })}
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
