import React, { FunctionComponent } from 'react'
import styles from './MapMenu.module.css'
import { MapMenuItems } from './MapMenuItems/MapMenuItems'

export const MapMenu: FunctionComponent = () => {
  return (
    <div className={styles.mapContent}>
      <MapMenuItems />
    </div>
  )
}
