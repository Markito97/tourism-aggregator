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
    <div>
      <Titles titles={activitiesTitles} />
      <Slider />
      <Hotels />
    </div>
  )
}
