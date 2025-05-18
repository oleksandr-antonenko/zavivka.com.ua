'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { titles } from './consultation-data';

const ConsultationMobile = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? titles.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === titles.length - 1 ? 0 : i + 1));
  };

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 150 : -150,
      rotateY: dir > 0 ? -15 : 15,
      scale: 0.9,
      filter: 'blur(6px)',
    }),
    center: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1], // easeOutExpo
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir < 0 ? 150 : -150,
      rotateY: dir < 0 ? -15 : 15,
      scale: 0.9,
      filter: 'blur(6px)',
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
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
                className="object-cover rounded-xl transition-all duration-500 ease-out"
              />
            </motion.div>
          </AnimatePresence>
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
      <div className="text-center px-4">
        <h3 className="text-lg font-semibold text-white">
          {titles[index].title}
        </h3>
      </div>
    </div>
  );
};

export default ConsultationMobile;
