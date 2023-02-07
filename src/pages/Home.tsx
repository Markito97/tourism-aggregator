import React, { RefObject } from 'react'
import { Titles } from '../components/Titles/Titles'
import { AboutUs } from '../components/AboutUs/AboutUs'
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

const aboutUsTitles = {
  title: 'Our Philosophy',
  subTitle: 'About Us',
  className: 'Content',
}

interface HomeProps {
  testRef?: RefObject<HTMLDivElement>
}

export const Home = ({ testRef }: HomeProps): JSX.Element => {
  return (
    <>
      <Titles titles={activitiesTitles} />
      <Carousel />
      <Titles titles={hotelsTitles} />
      <HotelsContent />
    </>
  )
}
