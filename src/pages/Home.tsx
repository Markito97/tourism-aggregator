import React, { RefObject } from 'react'
import { Titles } from '../components/Titles/Titles'
import { HotelsContent } from '../components/Hotels/HotelsContent'
import { Carousel } from '../components/Carousel/Carousel'

const activitiesTitles = {
  title: 'Activities for Everyoune',
  subTitle: 'HUNDREDS OF',
  className: 'Content',
}

const hotelsTitles = {
  title: 'Hotels and Appartments',
  subTitle: 'Beauties',
  className: 'Content',
}

export const Home = (): JSX.Element => {
  return (
    <>
      <Titles titles={activitiesTitles} />
      <Carousel />
      <Titles titles={hotelsTitles} />
      <HotelsContent />
    </>
  )
}
