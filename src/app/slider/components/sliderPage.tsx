"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import SlideNextButton from "./slideNextButton";
import SlidePrevButton from "./slidePrevButton";

const images = ["/Slider1.webp", "/Slider2.webp", "/Slider3.webp"];

export default function ImageSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full max-w-xl mx-auto">
      <Swiper
        slidesPerView={1}
        onSwiper={setSwiper}
        className="rounded-2xl shadow-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-4">
        <SlidePrevButton swiper={swiper} />
        <SlideNextButton swiper={swiper} />
      </div>
    </div>
  );
}
