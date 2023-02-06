import React from 'react'
import { Slider } from '../components/Slider/Slider'
import { Titles } from '../components/Titles/Titles'
import { AboutUs } from '../components/AboutUs/AboutUs'
import { HotelsContent } from '../components/Hotels/HotelsContent'

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

const aboutUsTitles = {
  title: 'Our Philosophy',
  subTitle: 'About Us',
  className: 'Content',
}

export const Home = (): JSX.Element => {
  return (
    <>
      <Titles titles={activitiesTitles} />
      <Slider />
      <Titles titles={hotelsTitles} />
      <HotelsContent />
      <Titles titles={aboutUsTitles} />
      <AboutUs />
    </>
  )
}
