'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { ReviewProps } from './type';
import { SpriteSVGSocial } from '@/shared/svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { Card } from './Card';

const Review: FC<ReviewProps> = ({ reviews }) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: '.custom-swiper-pagination',
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
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Card {...review} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Пагинация */}
      <div className="custom-swiper-pagination mt-4 sm:mt-6 flex justify-center gap-2" />
    </div>
  );
};

export default Review;
