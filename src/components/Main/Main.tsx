import React from 'react'
// eslint-disable-next-line import/no-absolute-path
import Carousel from '/src/assets/resource/Carousel1.jpg'

export const Main = (): JSX.Element => {
  return (
    <main>
      <div className="container">
        <div className="carousel">
          <img src={Carousel} alt="" />
        </div>
      </div>
    </main>
  )
}
