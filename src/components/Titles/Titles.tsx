import React from 'react'

import styles from './Titles.module.css'

interface ITitles {
  title: string
  subTitle: string
  className: string
}

interface TitlesProps {
  titles: ITitles
}

export const Titles = ({ titles }: TitlesProps): JSX.Element => {
  const { title, subTitle, className } = titles
  const container = className === 'Content' ? styles.content : styles.contentImg
  return (
    <div className={container}>
      <h6
        className={
          className === 'Content' ? styles.subTitle : styles.subTitleImg
        }
      >
        {subTitle}
      </h6>
      <h1 className={className === 'Content' ? styles.title : styles.titleImg}>
        {title}
      </h1>
    </div>
  )
}
