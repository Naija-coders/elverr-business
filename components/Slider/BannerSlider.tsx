import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import DiscoverBanner from "../Banner/DiscoverBanner";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
