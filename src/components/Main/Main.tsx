import styles from './Main.module.css'
import { Hotels } from './Hotels/Hotels'
import { Slider } from '../Slider/Slider'
import { Titles } from '../Titles/Titles'
import React from 'react'
const activitiesTitles = {
  title: 'Activities for Everyoune',
  subTitle: 'HUNDREDS OF',
  className: 'Content',
}

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className="container">
        <Titles titles={activitiesTitles} />
        <Slider />
        <Hotels />
      </div>
    </main>
  )
}
