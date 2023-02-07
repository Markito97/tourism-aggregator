/* eslint-disable import/no-absolute-path */
import React from 'react'
import { HotelsItem } from './HotelsItem'
import Hotels1 from '/src/assets/resource/Hotel1.jpg'
import Hotels2 from '/src/assets/resource/Hotel2.jpg'
import Hotels3 from '/src/assets/resource/Hotel3.jpg'
import styles from './HotelsContent.module.css'

const content = [
  { text: 'Reine', image: Hotels1 },
  { text: 'Norway', image: Hotels2 },
  { text: 'Bergen', image: Hotels3 },
]

export const HotelsContent = (): JSX.Element => {
  return (
    <div className={styles.content}>
      {content.map((content) => (
        <HotelsItem key={content.image} content={content} />
      ))}
    </div>
  )
}
