'use client';

import { Photo } from '@/components/zavivka/photos';
import { NextPhoto } from '@/components/zavivka/NextPhoto';
import { PreviousPhoto } from '@/components/zavivka/PreviousPhoto';
import PhotoGallery from '@/components/zavivka/PhotoGallery';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { AnimatePresence } from 'framer-motion';
import { useCarousel } from './hooks/useCarousel';
import { CarouselSlide } from './CarouselSlide';

type CarouselProps = {
  filteredPhotos: Photo[];
};

const Carousel = ({ filteredPhotos }: CarouselProps) => {
  const {
    validPhotos,
    currentIndex,
    goToPrevious,
    goToNext,
    isAnimating,
    direction,
    lightboxOpen,
    setLightboxOpen,
    lastSwipeTime,
    setLastSwipeTime,
    containerRef,
  } = useCarousel(filteredPhotos);

  const currentPhoto = validPhotos[currentIndex];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const now = Date.now();
      if (now - lastSwipeTime < 300 || isAnimating) return;
      setLastSwipeTime(now);
      goToNext();
    },
    onSwipedRight: () => {
      const now = Date.now();
      if (now - lastSwipeTime < 300 || isAnimating) return;
      setLastSwipeTime(now);
      goToPrevious();
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  if (filteredPhotos.length === 0) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-xl text-center">
          Немає фотографій за вашими фільтрами
        </p>
      </div>
    );
  }

  if (filteredPhotos.length > 0 && validPhotos.length === 0) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-xl text-center">
          Фото знайдено, але вони недоступні для показу
        </p>
      </div>
    );
  }

  const prevIndex =
    currentIndex === 0 ? validPhotos.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === validPhotos.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="w-full md:w-3/4 flex flex-col h-full">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center h-[450px] md:h-[550px]"
      >
        {validPhotos.length > 1 && (
          <div
            className="block absolute left-[-20px] md:left-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
            onClick={goToPrevious}
          >
            <CarouselSlide
              photo={validPhotos[prevIndex]}
              index={prevIndex}
              isCurrent={false}
              direction={direction}
            />
            <div className="md:hidden absolute left-[20px] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <div className="flex items-center justify-center w-8 h-8 bg-black/60 rounded-full animate-pulse">
                <ChevronLeft className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
            <div className="hidden md:flex items-center mt-3 absolute bottom-[-40px] left-0">
              <PreviousPhoto />
              <span className="hidden lg:block ml-3 text-[12px] text-[#FBFBFB]">
                Попереднє фото
              </span>
            </div>
          </div>
        )}

        <div className="w-full max-w-[346px] h-full md:max-w-full md:w-[450px] px-2 md:px-4 cursor-pointer">
          <div
            {...handlers}
            className="relative w-full h-full rounded-lg overflow-hidden z-10 group"
            onClick={() => setLightboxOpen(true)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {currentPhoto?.src && (
                <CarouselSlide
                  key={currentPhoto.id}
                  photo={currentPhoto}
                  index={currentIndex}
                  isCurrent={true}
                  direction={direction}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {validPhotos.length > 1 && (
          <div
            className="block absolute right-[-20px] md:right-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
            onClick={goToNext}
          >
            <CarouselSlide
              photo={validPhotos[nextIndex]}
              index={nextIndex}
              isCurrent={false}
              direction={direction}
            />
            <div className="md:hidden absolute right-[-10px] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <div className="flex items-center justify-center w-8 h-8 bg-black/60 rounded-full animate-pulse">
                <ChevronRight className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
            <div className="hidden md:flex items-center justify-end mt-3 absolute bottom-[-40px] right-0">
              <span className="hidden lg:block mr-3 text-[12px] text-[#FBFBFB]">
                Наступне фото
              </span>
              <NextPhoto />
            </div>
          </div>
        )}
      </div>

      <PhotoGallery
        photos={validPhotos}
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default Carousel;
