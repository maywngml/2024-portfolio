'use client';
import Image from 'next/image';
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
      className='mb-2 w-[calc(100vw-3.5rem)] h-[250px] md:h-[400px] lg:mb-3 lg:w-full lg:aspect-square xl:h-[500px]'
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`${title} 썸네일 슬라이드 ${index}`}>
          <div className='relative w-full h-full'>
            <Image
              className='object-cover rounded-[20px]'
              src={image}
              fill
              sizes='100%'
              alt={`${title} 썸네일 이미지`}
            ></Image>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
