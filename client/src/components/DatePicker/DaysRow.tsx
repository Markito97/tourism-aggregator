import React from 'react'
import styles from './DaysRow.module.css'
import Day from '../../components/DatePicker/Day'

interface DaysRowProps {
  daysList: Array<number | false>
}

export const DaysRow = ({ daysList }: DaysRowProps): JSX.Element => {
  return (
    <div className={styles.dayRow}>
      {daysList.map((day, index) => (
        <Day key={index} day={day} />
      ))}
    </div>
  )
}
