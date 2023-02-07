import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel1 from '@assets/resource/Carousel1.jpg'
import Carousel2 from '@assets/resource/Carousel2.jpg'
import Carousel3 from '@assets/resource/Carousel3.jpg'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'

export const Carousel = (): JSX.Element => {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={3}
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
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}
