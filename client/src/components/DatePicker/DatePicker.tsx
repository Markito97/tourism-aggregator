import { useState } from 'react'
import {
  getNextYearAndMonth,
  getPrevYearAndMonth,
  getThisYearAndThisMonth,
} from '../../utils/dateHelpers/index'
import { DisablePreviousDaysContext } from '../../context/DateContext'
import { Month } from '../../components/DatePicker/Month'
import styles from './DatePicker.module.css'
import { ChevronLeft } from '../../assets/icons/ChevronLeft'
import { ChevronRight } from '../../assets/icons/ChevronRight'

export const DatePicker = ({ disablePreviousDays = false }) => {
  const [thisYear, thisMonth] = getThisYearAndThisMonth()
  const [monthsDate, setMonthData] = useState([
    {
      year: thisYear,
      month: thisMonth + 1,
    },
    {
      year: thisYear,
      month: thisMonth + 2,
    },
  ])

  const onClickNextButton = () => {
    setMonthData(
      ([, { year: prevRightDisplayYear, month: prevRightDisplayMonth }]) => {
        const [nextRightDisplayYear, nextRightDisplayMonth] =
          getNextYearAndMonth(prevRightDisplayYear, prevRightDisplayMonth)
        return [
          { year: prevRightDisplayYear, month: prevRightDisplayMonth },
          { year: nextRightDisplayYear, month: nextRightDisplayMonth },
        ]
      }
    )
  }

  const onClickPrevButton = () => {
    setMonthData(
      ([{ year: prevLeftDisplayYear, month: prevLeftDisplayMonth }]) => {
        const [nextLeftDisplayYear, nextLeftDisplayMonth] = getPrevYearAndMonth(
          prevLeftDisplayYear,
          prevLeftDisplayMonth
        )
        return [
          { year: nextLeftDisplayYear, month: nextLeftDisplayMonth },
          { year: prevLeftDisplayYear, month: prevLeftDisplayMonth },
        ]
      }
    )
  }

  return (
    <DisablePreviousDaysContext.Provider value={disablePreviousDays}>
      <div className={styles.container}>
        <div>
          <ChevronLeft onClick={onClickPrevButton} />
        </div>
        {monthsDate.map(({ year, month }) => (
          <Month key={`${year}${month}`} year={year} month={month} />
        ))}
        <div>
          <ChevronRight onClick={onClickNextButton} />
        </div>
      </div>
    </DisablePreviousDaysContext.Provider>
  )
}
