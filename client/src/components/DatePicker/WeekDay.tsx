import React from 'react'
import styles from './WeekDay.module.css'

export const WeekDay = () => {
  return (
    <div className={styles.header}>
      {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day) => (
        <div key={`${day}`}>{day}</div>
      ))}
    </div>
  )
}
