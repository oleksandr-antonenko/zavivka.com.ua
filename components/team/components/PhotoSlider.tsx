'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import type { PhotoSliderProps } from './type';
import { PreviousPhoto } from '@/components/zavivka/PreviousPhoto';
import { NextPhoto } from '@/components/zavivka/NextPhoto';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoSlider = ({
  photosMen,
  photosWomen,
  forMen = false,
}: PhotoSliderProps) => {
  const photos = forMen ? photosMen : photosWomen;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 - next, -1 - prev

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
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
        ease: [0.33, 1, 0.68, 1],
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
    <PhotoProvider>
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-[900px] flex justify-center items-center overflow-hidden">
          {/* Левая часть — Предыдущее фото + кнопка под ним */}
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={prev}
          >
            <div className="w-[100px] h-[180px] md:w-[250px] md:h-[250px] opacity-40 scale-75 z-10 relative -mr-4 md:mr-0">
              <Image
                src={photos[(index - 1 + photos.length) % photos.length]}
                alt="previous"
                fill
                quality={60}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:flex items-center mt-2">
              <PreviousPhoto />
              <span className="hidden lg:block ml-3 text-xs text-[#FBFBFB]">
                Попереднє фото
              </span>
            </div>
          </div>

          {/* Центральное фото */}
          <div
            className="relative w-[250px] h-[250px] md:w-[407px] md:h-[407px] z-20 perspective-[1000px]"
            {...handlers}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={photos[index]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 shadow-xl w-full h-full rounded-xl cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {photos.map((photo, i) => (
                  <PhotoView key={i} src={photo}>
                    {i === index ? (
                      <Image
                        src={photo}
                        alt={`photo-${i}`}
                        fill
                        quality={60}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <div style={{ display: 'none' }} />
                    )}
                  </PhotoView>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Правая часть — Следующее фото + кнопка под ним */}
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={next}
          >
            <div className="w-[100px] h-[180px] md:w-[250px] md:h-[250px] opacity-40 scale-75 z-10 relative -ml-4 md:ml-0">
              <Image
                src={photos[(index + 1) % photos.length]}
                alt="next"
                fill
                quality={60}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:flex items-center mt-2">
              <span className="hidden lg:block mr-3 text-xs text-[#FBFBFB]">
                Наступне фото
              </span>
              <NextPhoto />
            </div>
          </div>
        </div>

        {/* Пагинация */}
        <div className="custom-swiper-pagination-for-consultation flex justify-center gap-2 mt-4 sm:mt-6">
          {photos.map((_, i) => (
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
    </PhotoProvider>
  );
};

export default PhotoSlider;
