import React from 'react'
import styles from './ImageTitle.module.css'
import { MainTitle } from './MainTitle/MainTitle'
import { SubTitle } from './SubTitle/SubTitle'

export const ImageTitle = (): JSX.Element => {
  return (
    <div className={styles.titleContainer}>
      <SubTitle>Explore</SubTitle>
      <MainTitle>Norway</MainTitle>
    </div>
  )
}
