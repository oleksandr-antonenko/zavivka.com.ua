'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

import type { PhotoSliderProps } from './type';

const PhotoSlider: FC<PhotoSliderProps> = ({
  photosMen,
  photosWomen,
  forMen = false,
}) => {
  const photos = forMen ? photosMen : photosWomen;

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: '.custom-swiper-pagination-for-dynamic-team-page',
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          375: {
            slidesPerView: 1.3,
            centeredSlides: true,
          },
          430: {
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
        className="w-full"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={photo}>
            <div className="min-w-[260px] sm:min-w-[285px] h-[284px] rounded-[20px] overflow-hidden border border-orange">
              <Image
                src={photo}
                alt={`photo-${index}`}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Пагинация */}
      <div className="custom-swiper-pagination-for-dynamic-team-page mt-4 sm:mt-6 flex justify-center gap-2" />
    </div>
  );
};

export default PhotoSlider;
