import React from 'react'
import { Day } from '../../components/DatePicker/Day'
import styles from './Days.module.css'

interface DaysProps {
  days: Array<Array<number | false>>
}

export const Days = ({ days }: DaysProps): JSX.Element => {
  return (
    <div>
      {days.map((daysList, index) => (
        <div key={`${index + 1}`} className={styles.dateRows}>
          {daysList.map((day, index) => (
            <Day key={`${index + 2}`} day={day} />
          ))}
        </div>
      ))}
    </div>
  )
}
