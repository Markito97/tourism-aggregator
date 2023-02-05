import React, { ReactNode } from 'react'

import styles from './Titles.module.css'

interface ITitles {
  title: string
  subTitle: string
}

interface TitlesProps {
  titles: ITitles
}

export const Titles = ({ titles }: TitlesProps): JSX.Element => {
  return (
    <div className={styles.content}>
      <h6 className={styles.subtitle}>{titles.subTitle} </h6>
      <h1 className={styles.maintitle}>{titles.title}</h1>
    </div>
  )
}
