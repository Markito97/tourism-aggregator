// eslint-disable-next-line import/no-absolute-path
import React from 'react'
import { Titles } from '../../Titles/Titles'
import { HotelsContent } from './HotelsContent/HotelsContent'

const hotelsTitles = {
  title: 'Hotels and Appartments',
  subTitle: 'Beauties',
}

export const Hotels = (): JSX.Element => {
  return (
    <div className="container">
      <Titles titles={hotelsTitles} />
      <HotelsContent />
    </div>
  )
}
