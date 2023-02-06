import React from 'react'
import { Hotels } from '../components/Hotels/Hotels'
import { Slider } from '../components/Slider/Slider'
import { Titles } from '../components/Titles/Titles'

const hotelsTitles = {
  title: 'Hotels and Appartments',
  subTitle: 'Beauties',
  className: 'Content',
}

export const Home = (): JSX.Element => {
  return (
    <>
      <Titles titles={hotelsTitles} />
      <Slider />
      <Hotels />
    </>
  )
}
