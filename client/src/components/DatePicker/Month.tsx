import React, { createContext, useMemo } from 'react'
import { getMonthData } from '../../utils/dateHelpers/getMonthData'
import { getYearMonth } from '../../utils/dateHelpers/getYearMonth'
import { Days } from '../../components/DatePicker/Days'
import { WeekDay } from '../../components/DatePicker/WeekDay'
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
      <div className={styles.content}>
        <div className={styles.header}>{getYearMonth(year, month)}</div>
        <div className={styles.datesContent}>
          <WeekDay />
          <Days days={days} />
        </div>
      </div>
    </YearMonthContext.Provider>
  )
}
