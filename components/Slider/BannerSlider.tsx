import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import DiscoverBanner from "../Banner/DiscoverBanner";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DiscoverBanner />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoverBanner />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoverBanner />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoverBanner />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
