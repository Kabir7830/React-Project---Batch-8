"use client"
import "./custom.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";


export default function Homepage(){
  return (
      <>
      <Swiper
      modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          300:{
            slidesPerView:1
          },
          600:{
            slidesPerView:2

          }
        }}
        autoplay={{
          delay:2000,
        }}        
      className="swiper carousel">
        <SwiperSlide>
          This is my first slide
        </SwiperSlide>
        <SwiperSlide>
          This is my second slide
        </SwiperSlide>
        <SwiperSlide>
          This is my third slide
        </SwiperSlide>
      </Swiper>
        <h2 className="heading">Hello</h2>
        <p className="text-[50px]">Welcome to my-app</p>
      </>
  )
}