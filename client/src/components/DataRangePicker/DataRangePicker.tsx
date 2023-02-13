import { useCalendar } from '../../hooks/useCalendar'
import React, { FC, useState } from 'react'
import { checkDateIsEqual, formatDate } from '../../utils/date/index'
import styles from './DataRangePicker.module.css'
import { ChevronLeft } from '../../assets/icons/ChevronLeft'
import { ChevronRight } from '../../assets/icons/ChevronRight'

interface CalendarProps {
  locale?: string
  firstWeekDayNumber?: number
}

export const DataRangePicker: FC<CalendarProps> = ({
  locale = 'default',
  firstWeekDayNumber = 2,
}) => {
  var somedate = new Date()
  somedate.setMonth(somedate.getMonth() + 1, 30)
  somedate.setDate(1)
  const [currentMonths, setCurrentMonths] = useState(new Date())
  const [nextMoths, setNextMoths] = useState(somedate)

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  console.log(startDate)
  console.log(endDate)

  const [dateBegin, dateBeginHandlers]: any = useCalendar({
    locale,
    date: currentMonths,
    firstWeekDayNumber,
  })

  const [dateEnd, dateEndHandlers] = useCalendar({
    locale,
    date: nextMoths,
    firstWeekDayNumber,
  })

  console.log(dateBegin)

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        {/* <div>{formatDate(startDate, 'DD MM YYYY')}</div> */}
        <div className={styles.calendar__header}>
          <ChevronLeft onClick={() => dateBeginHandlers.onClickArrow('left')} />
          <div>
            {dateBegin.monthesNames[dateBegin.selectedMonth.monthIndex].month}
            {dateBegin.selectedYear}
          </div>
        </div>
        <div className="calendar__body">
          <>
            <div className={styles.calendarDaysNames}>
              {dateBegin.weekDaysNames.map((weekDaysName: any) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div style={{ paddingTop: '25px' }}>
              <div className={styles.calendarDays}>
                {dateBegin.calendarDays.map((day: any) => {
                  const isSelectedDay = checkDateIsEqual(
                    day.date,
                    dateBegin.selectedDay.date
                  )

                  const isAdditionalDay =
                    day.monthIndex !== dateBegin.selectedMonth.monthIndex

                  return (
                    <div
                      key={`${day.dayNumber}-${day.monthIndex}`}
                      onClick={() => {
                        dateBeginHandlers.setSelectedDay(day)
                        // тут выбор текущей даты
                        setStartDate(day.date)
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
      <hr />
      <div className={styles.calendar}>
        {/* <div>{formatDate(endDate, 'DD MM YYYY')}</div> */}
        <div className={styles.calendar__header}>
          <div>
            {dateEnd.monthesNames[dateEnd.selectedMonth.monthIndex].month}
            {dateEnd.selectedYear}
          </div>
          <ChevronRight
            onClick={() => {
              dateEndHandlers.onClickArrow('right')
              dateBeginHandlers.onClickArrow('right')
            }}
          />
        </div>
        <div className="calendar__body">
          <>
            <div className={styles.calendarDaysNames}>
              {dateEnd.weekDaysNames.map((weekDaysName: any) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div style={{ paddingTop: '25px' }}>
              <div className={styles.calendarDays}>
                {dateEnd.calendarDays.map((day: any) => {
                  const isSelectedDay = checkDateIsEqual(
                    day.date,
                    dateEnd.selectedDay.date
                  )

                  const isAdditionalDay =
                    day.monthIndex !== dateEnd.selectedMonth.monthIndex

                  return (
                    <div
                      key={`${day.dayNumber}-${day.monthIndex}`}
                      onClick={() => {
                        dateEndHandlers.setSelectedDay(day)
                        // тут выбор текущей даты
                        setEndDate(day.date)
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
    </div>
  )
}
