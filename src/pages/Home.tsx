import React from 'react'
import { Titles } from '../components/Titles/Titles'
import { Carousel } from '../components/Carousel/Carousel'

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
