import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Carousel1 from '/src/assets/resource/Carousel1.jpg'
import Carousel2 from '/src/assets/resource/Carousel2.jpg'
import Carousel3 from '/src/assets/resource/Carousel3.jpg'

import styles from './Slider.module.css'
import { SliderButton } from './SliderButton/SliderButton'
const slides = [
  { image: Carousel1 },
  { image: Carousel2 },
  { image: Carousel3 },
]
export const Slider = (): JSX.Element => {
  const [swipe, setSwipe] = useState<any>()
  return (
    <>
      <div className={styles.carousel}>
        <SliderButton onClick={() => swipe?.slidePrev()}>BACK</SliderButton>
        <Swiper
          onBeforeInit={(swipper) => setSwipe(swipper)}
          slidesPerView={3}
          spaceBetween={30}
        >
          {slides.map((slide) => (
            <SwiperSlide>
              <img src={slide.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderButton onClick={() => swipe?.slideNext()}>NEXT</SliderButton>
      </div>
    </>
  )
}
