import React from 'react'
// eslint-disable-next-line import/no-absolute-path
import Hotel1 from '/src/assets/resource/Hotel1.jpg'
// eslint-disable-next-line import/no-absolute-path
import Hotel2 from '/src/assets/resource/Hotel2.jpg'

export const Hotels = (): JSX.Element => {
  return (
    <div>
      <div className="container">
        <div className="hotelHeader">
          <h6>BEAUTIES</h6>
          <h1>Hotels and Appartments</h1>
        </div>
        <div className="placesContainer">
          <div className="placeitem">
            <img alt="" />
            <h1>Reine</h1>
          </div>
          <div className="placeitem">
            <img src="" alt="" />
            <h1>Norway</h1>
          </div>
          <div className="placeitem">
            <img src="" alt="" />
            <h1>Bergen</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
