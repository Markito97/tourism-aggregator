import React from 'react'
import styles from './SearchPanel.module.css'

export const SeacrhPanel = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className={styles.textField}>
        <label className={styles.textLable} htmlFor="">
          Place
        </label>
        <input
          className={styles.contentFields}
          type="text"
          placeholder="Where"
        />
      </div>
      <div className={styles.textField}>
        <label className={styles.textLable} htmlFor="">
          Start date
        </label>
        <input
          className={styles.contentFields}
          type="text"
          placeholder="Start"
        />
      </div>
      <div className={styles.textField}>
        <label className={styles.textLable} htmlFor="">
          End date
        </label>
        <input className={styles.contentFields} type="text" placeholder="End" />
      </div>
      <button className={styles.searchBtn}>Search</button>
    </div>
  )
}
