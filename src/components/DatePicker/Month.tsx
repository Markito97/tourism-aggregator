import React, { createContext, useMemo } from 'react'
import {
  getMonthData,
  getYearMonth,
  WEEK_DAYS,
} from '../../utils/dateHelpers/index'
import { Days } from '../../components/DatePicker/Days'
import styles from './Month.module.css'

export const YearMonthContext = createContext<number[]>([0, 0])

interface MonthProps {
  year: number
  month: number
}

export const Month = ({ year, month }: MonthProps): JSX.Element => {
  const days = useMemo(() => getMonthData(year, month), [year, month])
  const value = useMemo(() => [year, month], [year, month])

  return (
    <YearMonthContext.Provider value={value}>
      <div className={styles.container}>
        <div className={styles.header}>{getYearMonth(year, month)}</div>

        <div className={styles.weekDays}>
          {WEEK_DAYS.map((weekDay) => (
            <div key={`${weekDay}`}>{weekDay}</div>
          ))}
        </div>

        <div className={styles.datesContent}>
          <Days days={days} />
        </div>
      </div>
    </YearMonthContext.Provider>
  )
}
