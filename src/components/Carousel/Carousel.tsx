import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel1 from '../../assets/resource/Carousel1.jpg'
import Carousel2 from '../../assets/resource/Carousel2.jpg'
import Carousel3 from '../../assets/resource/Carousel3.jpg'
import styles from './Carousel.module.css'
import 'swiper/css/navigation'
import 'swiper/css'
import { CarouselBtn } from './CarouselBtn'
const slides = [
  { image: Carousel1 },
  { image: Carousel2 },
  { image: Carousel3 },
]
interface SliderProps {
  sliderRef?: React.RefObject<HTMLDivElement>
}

export const Carousel = ({ sliderRef }: SliderProps): JSX.Element => {
  const [swipe, setSwipe] = useState<any>()

  return (
    <div ref={sliderRef} className={styles.carousel}>
      <CarouselBtn onClick={() => swipe?.slidePrev()}>BACK</CarouselBtn>
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
      <CarouselBtn onClick={() => swipe?.slideNext()}>NEXT</CarouselBtn>
    </div>
  )
}
