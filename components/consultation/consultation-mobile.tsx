'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { titles } from './consultation-data';
import { useSwipeable } from 'react-swipeable';
import { generateStaticBlurData } from '@/lib/generateStaticBlurData';
import { variants } from './animation/animation-slider';

const ConsultationMobile = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? titles.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === titles.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Контейнер слайдера */}
      <div className="relative w-full h-[300px] flex justify-center items-center overflow-hidden">
        {/* Предыдущее изображение */}
        <div
          className="absolute left-4 w-full max-w-[150px] md:w-[100px] h-[180px] opacity-40 scale-75 z-10 cursor-pointer"
          onClick={prev}
        >
          <Image
            src={titles[(index - 1 + titles.length) % titles.length].image}
            alt="previous"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Центральное изображение с кастомной анимацией */}
        <div className="relative w-full max-w-[250px] h-[250px] md:w-[200px] md:h-[250px] z-20 perspective-[1000px]">
          <div {...handlers} className="w-full h-full">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={titles[index].image}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 shadow-xl rounded-xl overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={titles[index].image}
                  alt={titles[index].title}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  blurDataURL={generateStaticBlurData()}
                  placeholder="blur"
                  className="object-cover rounded-xl transition-all duration-500 ease-out"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Следующее изображение */}
        <div
          className="absolute right-4 w-full max-w-[150px] md:w-[100px] h-[180px] opacity-40 scale-75 z-10 cursor-pointer"
          onClick={next}
        >
          <Image
            src={titles[(index + 1) % titles.length].image}
            alt="next"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Заголовок */}
      <div className="text-center px-4 h-[50px]">
        <h3 className="text-lg font-semibold text-white">
          {titles[index].title}
        </h3>
      </div>
      {/* Пагинация */}
      <div className="custom-swiper-pagination-for-consultation flex justify-center gap-2 mt-4">
        {titles.map((_, i) => (
          <button
            key={i}
            className={`swiper-pagination-bullet-for-consultation  ${i === index ? 'swiper-pagination-bullet-active-for-consultation' : ''}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConsultationMobile;
