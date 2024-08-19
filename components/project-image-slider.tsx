'use client';
import NextImage from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectImageSliderProps {
  title: string;
  images: string[];
}

export default function ProjectImageSlider({
  title,
  images,
}: ProjectImageSliderProps) {
  return (
    <Swiper
      className='mb-5 w-[calc(100vw-3.5rem)] h-[250px] md:h-[400px] lg:mb-[30px] lg:w-full lg:aspect-square xl:h-[500px]'
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => {
        const src = require(`../public${image}`).default;

        return (
          <SwiperSlide key={`${title} 썸네일 슬라이드 ${index}`}>
            <div className='relative w-full h-full'>
              <NextImage
                className='object-cover'
                src={src}
                fill
                placeholder='blur'
                sizes='100%'
                alt={`${title} 썸네일 이미지`}
              ></NextImage>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
