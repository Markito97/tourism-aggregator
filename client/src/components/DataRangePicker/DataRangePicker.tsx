import { useCalendar } from '../../hooks/useCalendar'
import React, { FC, useState } from 'react'
import { formatDate } from '../../utils/date/formatDate'
import styles from './DataRangePicker.module.css'
import { ChevronLeft } from '../../assets/icons/ChevronLeft'
import { ChevronRight } from '../../assets/icons/ChevronRight'

interface CalendarProps {
  locale?: string
  firstWeekDayNumber?: number
}

const checkDateIsEqual = (firstDate: Date, secondDate: Date) => {
  // if (!firstDate || !secondDate) return
  firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
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
  const [dateRange, setDateRange] = useState({ start: '', end: '' })

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

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
    <>
      <div className={styles.dateRange}>
        <input
          type="text"
          value={dateRange.start}
          className={styles.rangeField}
        />
        <input
          type="text"
          value={dateRange.end}
          className={styles.rangeField}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <ChevronLeft
              onClick={() => dateBeginHandlers.onClickArrow('left')}
            />
            <span>
              {dateBegin.monthesNames[dateBegin.selectedMonth.monthIndex].month}
            </span>
            <span>{dateBegin.selectedYear}</span>
          </div>
          <div className={styles.calendarContent}>
            <div className={styles.calendarDaysNames}>
              {dateBegin.weekDaysNames.map((weekDaysName: any) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div>
              <div className={styles.calendarDays}>
                {dateBegin.calendarDays.map((day: any, index: number) => {
                  const isSelectedDay = checkDateIsEqual(
                    day.date,
                    dateBegin.selectedDay.date
                  )
                  // console.log(isSelectedDay)
                  // console.log(day.date)
                  // console.log(dateBegin.selectedDay.date)

                  console.log(isSelectedDay)
                  return (
                    <div
                      key={index + 1}
                      onClick={() => {
                        dateBeginHandlers.setSelectedDay(day)
                        setStartDate(day.date)
                      }}
                      className={`${styles.calendarDay}`}
                    >
                      {day.dayNumber}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <span>
              {dateEnd.monthesNames[dateEnd.selectedMonth.monthIndex].month}
            </span>
            <span>{dateEnd.selectedYear}</span>
            <ChevronLeft
              onClick={() => dateBeginHandlers.onClickArrow('left')}
            />
          </div>

          <div className={styles.calendarContent}>
            <div className={styles.calendarDaysNames}>
              {dateBegin.weekDaysNames.map((weekDaysName: any) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div>
              <div className={styles.calendarDays}>
                {dateEnd.calendarDays.map((day: any, index: number) => (
                  <div
                    key={index + 1}
                    onClick={() => {
                      dateBeginHandlers.setSelectedDay(day)
                      setStartDate(day.date)
                    }}
                    className={`${styles.calendarDay}`}
                  >
                    {day.dayNumber}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
