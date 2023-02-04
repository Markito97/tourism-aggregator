import React, { FunctionComponent } from 'react'
import { MapMarker } from '../../../../assets/icons/MapMarker'
import { MapItem } from '../MapItem/MapItem'
import styles from './MapMenuItems.module.css'

const mapMenuItems = [
  {
    icon: <MapMarker />,
    text: 'Trondheim',
    helper: 'Plan a trip',
  },
  {
    icon: <MapMarker />,
    text: 'Geirangerfjord',
    helper: 'Plan a trip',
  },
  {
    icon: <MapMarker />,
    text: 'Lofoten',
    helper: 'Plan a trip',
  },
]

export const MapMenuItems: FunctionComponent = () => {
  return (
    <div className={styles.menuContent}>
      {mapMenuItems.map((item) => (
        <MapItem key={item.text} item={item} />
      ))}
    </div>
  )
}
