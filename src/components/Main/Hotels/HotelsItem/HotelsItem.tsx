import React from 'react'
import styles from './HotelsItem.module.css'

interface IContent {
  image: string
}

interface HotelsItemProps {
  content: IContent
}

export const HotelsItem = ({ content }: HotelsItemProps): JSX.Element => {
  return (
    <div className={styles.hotelsItem}>
      <div>
        <img src={content.image} alt="" />
      </div>
      <div>Reine</div>
    </div>
  )
}
