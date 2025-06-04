'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import type { PhotoSliderProps } from './type';
import { PreviousPhoto } from '@/components/zavivka/PreviousPhoto';
import { NextPhoto } from '@/components/zavivka/NextPhoto';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/styles.css';
import { generateStaticBlurData } from '@/lib/generateStaticBlurData';
import { variants } from './animation/animation-works-slider';
import { useMediaQuery } from '@react-hook/media-query';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ZoomRef {
  zoom: number;
  maxZoom: number;
  offsetX: number;
  offsetY: number;
  disabled: boolean;
  zoomIn: () => void;
  zoomOut: () => void;
  changeZoom: (
    targetZoom: number,
    rapid?: boolean,
    dx?: number,
    dy?: number,
  ) => void;
}

const PhotoSlider = ({
  photosMen,
  photosWomen,
  forMen = false,
}: PhotoSliderProps) => {
  const photos = forMen ? photosMen : photosWomen;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastSwipeTime, setLastSwipeTime] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const zoomRef = useRef<ZoomRef>(null);
  const SWIPE_COOLDOWN = 300; // milliseconds
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setIndex(0);
  }, [forMen]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const now = Date.now();
      if (now - lastSwipeTime < SWIPE_COOLDOWN || isAnimating) return;
      setLastSwipeTime(now);
      next();
    },
    onSwipedRight: () => {
      const now = Date.now();
      if (now - lastSwipeTime < SWIPE_COOLDOWN || isAnimating) return;
      setLastSwipeTime(now);
      prev();
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  }, [photos.length, isAnimating]);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  }, [photos.length, isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const slides = photos.map((photo) => ({
    src: photo,
    alt: `photo-${photos.indexOf(photo)}`,
  }));

  return (
    <>
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
            onClick={() => setLightboxOpen(true)}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={photos[index]}
                custom={direction}
                variants={isDesktop ? variants : undefined}
                initial={isDesktop ? 'enter' : undefined}
                animate={isDesktop ? 'center' : undefined}
                exit={isDesktop ? 'exit' : undefined}
                className="absolute inset-0 shadow-xl w-full h-full rounded-xl cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                <Image
                  src={photos[index]}
                  alt={`photo-${index}`}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  blurDataURL={generateStaticBlurData()}
                  placeholder="blur"
                  className="object-cover rounded-xl"
                />
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
        <div className="flex justify-start gap-2 mt-4 sm:mt-6 overflow-x-auto custom-scrollbar pb-3 px-4 max-w-full whitespace-nowrap">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`swiper-pagination-bullet-for-consultation  ${i === index ? 'swiper-pagination-bullet-active-for-consultation' : ''}`}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={index}
        plugins={[Counter, Zoom]}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
        zoom={{
          ref: zoomRef,
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          scrollToZoom: true,
        }}
        render={{
          buttonZoom: ({ zoom, maxZoom }) => (
            <div className="absolute left-[-100px] top-3 z-[10001] flex gap-2">
              <button
                onClick={() => zoomRef.current?.zoomIn()}
                className="p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
                disabled={zoom >= maxZoom}
              >
                <ZoomIn className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => zoomRef.current?.zoomOut()}
                className="p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
                disabled={zoom <= 1}
              >
                <ZoomOut className="w-6 h-6 text-white" />
              </button>
            </div>
          ),
        }}
      />
    </>
  );
};

export default PhotoSlider;
