import React from 'react'
import { Carousel } from '../components/Carousel/Carousel'
import { Titles } from '../components/Titles/Titles'

const activitiesTitles = {
  title: 'Lakes for Everyoune',
  subTitle: 'Beauties',
  className: 'Content',
}

export const Home = (): JSX.Element => {
  return (
    <>
      <Titles titles={activitiesTitles} />
      <Carousel />
    </>
  )
}
