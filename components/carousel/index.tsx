"use client";

import React, { forwardRef, MutableRefObject } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

import { getImagesFromLocal } from "@/utils/getImages";

export const Carousel = forwardRef(function carousel(
  { images }: { images: Array<string> },
  ref: any
) {
  return (
    <Swiper
      ref={ref}
      slidesPerView={3}
      spaceBetween={20}
      className="h-full w-full"
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide
            key={index}
            className=" relative w-[10rem] h-[10rem] rounded-3xl overflow-hidden"
          >
            <Image alt={`image-${index}`} fill objectFit="cover" src={image} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});
