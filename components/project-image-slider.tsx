'use client';
import NextImage from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { getBlurDataURL } from '@/lib/utils/helpers';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Image } from '@/types/project';

interface ProjectImageSliderProps {
  title: string;
  images: Image[];
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
      {images.map(({ url, blurhash }: Image, index) => (
        <SwiperSlide key={`${title} 썸네일 슬라이드 ${index}`}>
          <div className='relative w-full h-full'>
            <NextImage
              className='object-cover'
              src={url}
              fill
              placeholder='blur'
              blurDataURL={getBlurDataURL(blurhash)}
              sizes='100%'
              alt={`${title} 썸네일 이미지`}
            ></NextImage>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
