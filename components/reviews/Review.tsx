'use client';

import type { FC } from 'react';
import { ReviewProps } from './type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card } from './Card';
import { motion } from 'framer-motion';

// Контейнер для stagger-анимации
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Задержка между карточками
    },
  },
};

// Анимация для каждой карточки
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Review: FC<ReviewProps> = ({ reviews }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full"
    >
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
          375: { slidesPerView: 1.3, centeredSlides: true },
          430: { slidesPerView: 1.5, centeredSlides: true },
          640: { slidesPerView: 2, centeredSlides: false },
          768: { slidesPerView: 3, centeredSlides: false },
          1024: { slidesPerView: 4, centeredSlides: false },
        }}
        className="w-full"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id}>
            <motion.div variants={fadeInUp} custom={index} className="h-full">
              <Card {...review} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Пагинация */}
      <div className="custom-swiper-pagination mt-4 sm:mt-6 flex justify-center gap-2" />
    </motion.div>
  );
};

export default Review;
