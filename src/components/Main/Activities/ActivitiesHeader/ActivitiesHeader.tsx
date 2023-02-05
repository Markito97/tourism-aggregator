import React from 'react'
import styles from './ActivitiesHeader.module.css'

export const ActivitiesHeader = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <h6 className={styles.subtitle}>HUNDREDS OF</h6>
      <h1 className={styles.maintitle}>Activities for Everyoune</h1>
    </div>
  )
}
