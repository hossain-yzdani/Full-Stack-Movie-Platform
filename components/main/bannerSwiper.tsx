"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSwiper = () => {
  return (
    <div className="">
      <Swiper
        className="px-4"
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide dir="rtl" className="mb-10">
          <div className="w-full h-45 border border-themecolor rounded-md"></div>
        </SwiperSlide>

        <SwiperSlide dir="rtl" className="mb-10">
          <div className="w-full h-45 border border-themecolor rounded-md"></div>
        </SwiperSlide>

        <SwiperSlide dir="rtl" className="mb-10">
          <div className="w-full h-45 border border-themecolor rounded-md"></div>
        </SwiperSlide>

        <SwiperSlide dir="rtl" className="mb-10">
          <div className="w-full h-45 border border-themecolor rounded-md"></div>
        </SwiperSlide>

        <SwiperSlide dir="rtl" className="mb-10">
          <div className="w-full h-45 border border-themecolor rounded-md"></div>
        </SwiperSlide>

        <SwiperSlide dir="rtl" className="mb-10">
          <div className="w-full h-45 border border-themecolor rounded-md"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
