import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroSec() {
  return (
    <div className="herosec">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src={slide1} alt="Tiger Conservation, A Unique Success" className="hero-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Long-tailed Minivet & Peregrine Falcon" className="hero-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Great Indian Bustard, About 130 Left" className="hero-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
