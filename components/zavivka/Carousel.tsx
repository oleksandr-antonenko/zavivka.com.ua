'use client';

import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Photo } from '@/components/zavivka/photos';
import { NextPhoto } from '@/components/zavivka/NextPhoto';
import { PreviousPhoto } from '@/components/zavivka/PreviousPhoto';
import PhotoGallery from '@/components/zavivka/PhotoGallery';
import Link from 'next/link';
import { MousePointerClick, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

type CarouselProps = {
  filteredPhotos: Photo[];
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Carousel = ({ filteredPhotos }: CarouselProps) => {
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastSwipeTime, setLastSwipeTime] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const SWIPE_COOLDOWN = 300; // milliseconds
  const containerRef = useRef<HTMLDivElement>(null);

  const validPhotos = useMemo(
    () =>
      filteredPhotos.filter(
        (photo) =>
          Boolean(photo?.src) && photo?.slug && photo?.master && photo?.id,
      ),
    [filteredPhotos],
  );

  const totalPhotos = validPhotos.length;

  const [currentPhotoId, setCurrentPhotoId] = useState(
    validPhotos[0]?.id || '',
  );

  const currentIndex = validPhotos.findIndex(
    (photo) => photo.id === currentPhotoId,
  );
  const currentPhoto = validPhotos[currentIndex];

  const renderSlide = useCallback(
    (photo: Photo, index: number, isCurrent: boolean) => {
      if (!photo?.src) return null;

      return (
        <motion.div
          key={photo.id}
          className={`relative w-full h-full rounded-lg overflow-hidden ${
            isCurrent ? 'opacity-100' : 'opacity-70 hover:opacity-90'
          } transition-opacity`}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            position: isCurrent ? 'relative' : 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={photo.src}
            alt={`Preview ${photo.master || ''}`}
            fill
            quality={60}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="rounded-[24px]"
            priority={isCurrent}
          />
          {isCurrent && (
            <>
              <div className="absolute bottom-0 w-full bg-black/60 p-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20 translate-y-0 md:translate-y-full">
                <p className="text-sm text-white text-center">
                  Майстер:{' '}
                  <Link
                    href={`/team/${photo.slug}`}
                    className="text-[#D7A908] underline hover:text-yellow transition uppercase"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {photo.master}
                  </Link>
                </p>
              </div>
              <div className="absolute top-2 right-2 flex items-center gap-1 z-30 pointer-events-none">
                <div className="flex items-center gap-2 px-2 py-1 text-[10px] mt-1 text-white bg-black/60 rounded animate-pulse">
                  Клiк
                  <MousePointerClick className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
            </>
          )}
        </motion.div>
      );
    },
    [direction],
  );

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      const modals = document.querySelectorAll('[id^="containerBookingModal"]');
      modals.forEach((modal) => {
        (modal as HTMLElement).style.zIndex = '9999';
      });
    } else {
      document.body.style.overflow = 'unset';
      const modals = document.querySelectorAll('[id^="containerBookingModal"]');
      modals.forEach((modal) => {
        (modal as HTMLElement).style.zIndex = '10000';
      });
    }

    return () => {
      document.body.style.overflow = 'unset';
      const modals = document.querySelectorAll('[id^="containerBookingModal"]');
      modals.forEach((modal) => {
        (modal as HTMLElement).style.zIndex = '10000';
      });
    };
  }, [lightboxOpen]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const now = Date.now();
      if (now - lastSwipeTime < SWIPE_COOLDOWN || isAnimating) return;
      setLastSwipeTime(now);
      goToNext();
    },
    onSwipedRight: () => {
      const now = Date.now();
      if (now - lastSwipeTime < SWIPE_COOLDOWN || isAnimating) return;
      setLastSwipeTime(now);
      goToPrevious();
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  useEffect(() => {
    if (validPhotos.length > 0) {
      setCurrentPhotoId(validPhotos[0].id);
    }
  }, [filteredPhotos, validPhotos]);

  const goToPrevious = useCallback(() => {
    if (totalPhotos <= 1 || isAnimating) return;
    const newIndex = currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1;
    if (!validPhotos[newIndex]?.src) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentPhotoId(validPhotos[newIndex].id);
  }, [currentIndex, totalPhotos, validPhotos, isAnimating]);

  const goToNext = useCallback(() => {
    if (totalPhotos <= 1 || isAnimating) return;
    const newIndex = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;
    if (!validPhotos[newIndex]?.src) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentPhotoId(validPhotos[newIndex].id);
  }, [currentIndex, totalPhotos, validPhotos, isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  if (filteredPhotos.length === 0) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-xl text-center">
          Немає фотографій за вашими фільтрами
        </p>
      </div>
    );
  }

  if (filteredPhotos.length > 0 && totalPhotos === 0) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-xl text-center">
          Фото знайдено, але вони недоступні для показу
        </p>
      </div>
    );
  }

  const prevIndex = currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1;
  const nextIndex = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;

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
            {renderSlide(validPhotos[prevIndex], prevIndex, false)}
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
            {currentPhoto?.src && (
              <AnimatePresence initial={false} custom={direction} mode="wait">
                {renderSlide(currentPhoto, currentIndex, true)}
              </AnimatePresence>
            )}
          </div>
        </div>

        {validPhotos.length > 1 && (
          <div
            className="block absolute right-[-20px] md:right-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
            onClick={goToNext}
          >
            {renderSlide(validPhotos[nextIndex], nextIndex, false)}
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
