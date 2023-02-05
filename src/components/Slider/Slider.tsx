import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel1 from '../../assets/resource/Carousel1.jpg'
import Carousel2 from '../../assets/resource/Carousel2.jpg'
import Carousel3 from '../../assets/resource/Carousel3.jpg'
import styles from './Slider.module.css'
import 'swiper/css/navigation'
import 'swiper/css'

import { SliderButton } from './SliderButton/SliderButton'
const slides = [
  { image: Carousel1 },
  { image: Carousel2 },
  { image: Carousel3 },
]
interface SliderProps {
  sliderRef?: React.RefObject<HTMLDivElement>
}

export const Slider = ({ sliderRef }: SliderProps): JSX.Element => {
  const [swipe, setSwipe] = useState<any>()

  return (
    <div ref={sliderRef} className={styles.carousel}>
      <SliderButton onClick={() => swipe?.slidePrev()}>BACK</SliderButton>
      <Swiper
        onBeforeInit={(swipper) => {
          setSwipe(swipper)
        }}
        slidesPerView={3}
        spaceBetween={30}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton onClick={() => swipe?.slideNext()}>NEXT</SliderButton>
    </div>
  )
}
