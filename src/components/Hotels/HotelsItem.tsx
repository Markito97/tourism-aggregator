import React from 'react'
import styles from './HotelsItem.module.css'
import { RaitingStart } from '../../assets/icons/RaitingStart'

interface IContent {
  image: string
  text: string
}

interface HotelsItemProps {
  content: IContent
}

export const HotelsItem = ({ content }: HotelsItemProps): JSX.Element => {
  return (
    <div className={styles.hotelsItem}>
      <div>
        <img
          style={{ width: '100%' }}
          draggable={false}
          src={content.image}
          alt=""
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
        <h1>{content.text}</h1>
        <div
          style={{ paddingLeft: '25px', display: 'flex', alignItems: 'center' }}
        >
          <RaitingStart />
          <RaitingStart />
          <RaitingStart />
          <RaitingStart />
          <RaitingStart />
        </div>
      </div>
    </div>
  )
}
