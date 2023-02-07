import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CarouselImg from '@assets/resource/Carousel1.jpg'

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
          <Link to={'/hotels'}>
            <img src={CarouselImg} alt="first carousel slide" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
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
