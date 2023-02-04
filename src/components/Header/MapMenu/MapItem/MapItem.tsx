import React, { FunctionComponent } from 'react'
import styles from './MapItem.module.css'

interface item {
  icon: JSX.Element
  text: string
  helper: string
}

interface IMapItem {
  item: item
}

export const MapItem: FunctionComponent<IMapItem> = ({ item }) => {
  return (
    <div className={styles.content}>
      <div className={styles.marker}>{item.icon}</div>
      <div className={styles.textContent}>
        <div className={styles.text}>{item.text}</div>
        <div className={styles.helper}>{item.helper}</div>
      </div>
    </div>
  )
}
