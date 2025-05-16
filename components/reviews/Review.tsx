'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { ReviewProps } from './type';
import { SpriteSVGSocial } from '@/shared/svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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
            <div
              className={`
          group relative 
          border border-orange 
          rounded-[20px] 
          overflow-hidden 
          transition-all duration-300 
          mx-auto 
          w-full
          max-w-[250px] 
          sm:min-w-[284px] 
          md:max-w-none 
          md:min-w-0 
          p-[20px] 
          h-full
          cursor-pointer
        `}
            >
              <div className="relative">
                {/* Фото (не исчезает на мобилке) */}
                <div
                  className={`
                    w-full 
                    h-[230px] 
                    sm:h-[250px] 
                    md:h-[250px] 
                    transition-opacity duration-300 
                    ${
                      // Прячем картинку только при ховере и на десктопе
                      'md:group-hover:opacity-0'
                    }
                  `}
                >
                  <Image
                    src={`/images/clients/${review.image}`}
                    alt={review.clientName}
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>

                {/* Комментарий (hover десктоп) */}
                <p
                  className={`
                    absolute inset-0 
                    opacity-0 
                    md:group-hover:opacity-100 
                    transition-opacity duration-300 
                    bg-transparent
                    p-4 
                    font-mali text-[12px] 
                    overflow-y-auto 
                    hidden md:flex items-center justify-center text-start rounded-[20px]
                  `}
                >
                  {review.reviewText}
                </p>
              </div>

              {/* Информация о пользователе */}
              <div className="flex gap-3 items-center mt-3 pl-[10px]">
                {review.socialLink && review.social && (
                  <a href={review.socialLink} target="_blank">
                    <SpriteSVGSocial name={review.social} />
                  </a>
                )}
                <p className="text-[14px]">{review.clientName}</p>
              </div>

              <div className="font-mali text-[12px] mt-2 md:hidden px-2 text-start h-[100px] overflow-y-auto">
                {review.reviewText}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Пагинация */}
      <div className="custom-swiper-pagination mt-4 sm:mt-6 flex justify-center gap-2" />
    </div>
  );
};

export default Review;
