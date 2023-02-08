import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel1 from '@assets/resource/Carousel1.jpg'
import Carousel2 from '@assets/resource/Carousel2.jpg'
import Carousel3 from '@assets/resource/Carousel3.jpg'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import 'swiper/css'
import 'swiper/css/navigation'

export const Carousel = (): JSX.Element => {
  const { height, width } = useWindowDimensions()
  const [slidesPerView, setSlidePerView] = useState<number>(3)

  useEffect(() => {
    if (width < 1130) {
      setSlidePerView(1)
    } else {
      setSlidePerView(3)
    }
  }, [width, slidesPerView])

  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={slidesPerView}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to={'/hotels/first'}>
            <img src={Carousel1} alt="first carousel slide" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/hotels/second'}>
            <img src={Carousel2} alt="first carousel slide" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel3} alt="first carousel slide" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
