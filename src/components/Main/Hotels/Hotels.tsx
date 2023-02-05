// eslint-disable-next-line import/no-absolute-path
import React from 'react'
import { Titles } from '../../Titles/Titles'
import { HotelsContent } from './HotelsContent/HotelsContent'
import styles from './Hotels.module.css'

const hotelsTitles = {
  title: 'Hotels and Appartments',
  subTitle: 'Beauties',
  className: 'Content',
}

export const Hotels = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <Titles titles={hotelsTitles} />
      <HotelsContent />
    </div>
  )
}
