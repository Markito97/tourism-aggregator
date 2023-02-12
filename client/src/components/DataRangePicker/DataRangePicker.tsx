import { useCalendar } from '../../hooks/useCalendar'
import React, { FC } from 'react'
import { checkIsToday, checkDateIsEqual } from '../../utils/date/index'

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
        {state.mode === 'days' && (
          <div>
            {state.monthesNames[state.selectedMonth.monthIndex].month}
            {state.selectedYear}
          </div>
        )}
        {state.mode === 'monthes' && <div>{state.selectedYear}</div>}
        {state.mode === 'years' && (
          <div>
            {state.selectedYearsInterval[0]} -{' '}
            {
              state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ]
            }
          </div>
        )}
        <ChevronRight onClick={() => functions.onClickArrow('right')} />
      </div>
      <div className="calendar__body">
        {state.mode === 'days' && (
          <>
            <div className={styles.calendarDaysNames}>
              {state.weekDaysNames.map((weekDaysName) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div style={{ paddingTop: '25px' }}>
              <div className={styles.calendarDays}>
                {state.calendarDays.map((day) => {
                  // const isToday = checkIsToday(day.date)
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
                        // isToday ? `${styles.calendarToday}` : '',
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
        )}

        {state.mode === 'monthes' && (
          <div className="calendar__pick__items__container">
            {state.monthesNames.map((monthesName) => {
              const isCurrentMonth =
                new Date().getMonth() === monthesName.monthIndex &&
                state.selectedYear === new Date().getFullYear()
              const isSelectedMonth =
                monthesName.monthIndex === state.selectedMonth.monthIndex

              return (
                <div
                  key={monthesName.month}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedMonthByIndex(monthesName.monthIndex)
                    functions.setMode('days')
                  }}
                  className={[
                    'calendar__pick__item',
                    isSelectedMonth ? 'calendar__selected__item' : '',
                    isCurrentMonth ? 'calendar__today__item' : '',
                  ].join(' ')}
                >
                  {monthesName.monthShort}
                </div>
              )
            })}
          </div>
        )}

        {state.mode === 'years' && (
          <div className="calendar__pick__items__container">
            <div className="calendar__unchoosable__year">
              {state.selectedYearsInterval[0] - 1}
            </div>
            {state.selectedYearsInterval.map((year) => {
              const isCurrentYear = new Date().getFullYear() === year
              const isSelectedYear = year === state.selectedYear

              return (
                <div
                  key={year}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedYear(year)
                    functions.setMode('monthes')
                  }}
                  className={[
                    'calendar__pick__item',
                    isCurrentYear ? 'calendar__today__item' : '',
                    isSelectedYear ? 'calendar__selected__item' : '',
                  ].join(' ')}
                >
                  {year}
                </div>
              )
            })}
            <div className="calendar__unchoosable__year">
              {state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ] + 1}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
