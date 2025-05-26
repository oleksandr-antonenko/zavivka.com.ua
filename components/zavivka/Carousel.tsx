'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import Image from 'next/image';
import { Photo } from '@/components/zavivka/photos';
import { NextPhoto } from '@/components/zavivka/NextPhoto';
import { PreviousPhoto } from '@/components/zavivka/PreviousPhoto';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Link from 'next/link';
import { MousePointerClick, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { generateStaticBlurData } from '@/lib/generateStaticBlurData';
import { variants, sideVariants } from './animation/animation-carusel';
import { useMediaQuery } from '@react-hook/media-query';

type CarouselProps = {
  filteredPhotos: Photo[];
};

const Carousel = ({ filteredPhotos }: CarouselProps) => {
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastSwipeTime, setLastSwipeTime] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const SWIPE_COOLDOWN = 300; // milliseconds

  // Add state for modal view
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Calculate visible photos indices
  const visibleIndices = useMemo(() => {
    if (isModalOpen) {
      return validPhotos.map((_, index) => index);
    }
    const indices = [currentIndex];
    if (currentIndex > 0) indices.unshift(currentIndex - 1);
    if (currentIndex < totalPhotos - 1) indices.push(currentIndex + 1);
    return indices;
  }, [isModalOpen, currentIndex, totalPhotos, validPhotos]);

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
      <div className="relative flex items-center justify-center h-[450px] md:h-[550px]">
        {validPhotos.length > 1 && (
          <div
            className="block absolute left-[-20px] md:left-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
            onClick={goToPrevious}
          >
            <motion.div
              className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity"
              key={validPhotos[prevIndex]?.id}
              variants={isDesktop ? sideVariants : undefined}
              initial={isDesktop ? 'enterLeft' : undefined}
              animate={isDesktop ? 'center' : undefined}
              exit={isDesktop ? 'exitLeft' : undefined}
            >
              {validPhotos[prevIndex]?.src && (
                <Image
                  src={validPhotos[prevIndex].src}
                  alt={`Preview ${validPhotos[prevIndex]?.master || ''}`}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // blurDataURL={generateStaticBlurData()}
                  // placeholder="blur"
                  style={{ objectFit: 'cover' }}
                  className="rounded-[24px]"
                  loading="lazy"
                />
              )}
              <div className="md:hidden absolute left-[20px] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="flex items-center justify-center w-8 h-8 bg-black/60 rounded-full animate-pulse">
                  <ChevronLeft className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center mt-3">
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
          >
            {currentPhoto?.src && (
              <PhotoProvider
                onVisibleChange={(visible) => setIsModalOpen(visible)}
                overlayRender={({ index, onClose }) => {
                  const photo = validPhotos[index];
                  return photo ? (
                    <div className="absolute bottom-0 w-full bg-black/60 p-4 z-50 text-center">
                      <p className="text-sm text-white">
                        Майстер:{' '}
                        <Link
                          href={`/team/${photo.slug}`}
                          className="text-[#D7A908] underline hover:text-yellow transition uppercase"
                          onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                          }}
                        >
                          {photo.master}
                        </Link>
                      </p>
                    </div>
                  ) : null;
                }}
              >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentPhotoId}
                    custom={direction}
                    variants={isDesktop ? variants : undefined}
                    initial={isDesktop ? 'enter' : undefined}
                    animate={isDesktop ? 'center' : undefined}
                    exit={isDesktop ? 'exit' : undefined}
                    className="w-full h-full relative"
                    onAnimationComplete={() => setIsAnimating(false)}
                  >
                    {validPhotos.map((photo, index) => (
                      <PhotoView key={photo.id} src={photo.src}>
                        {visibleIndices.includes(index) ? (
                          <Image
                            src={photo.src}
                            alt={`Фото від ${photo.master || ''}`}
                            fill
                            quality={60}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            blurDataURL={generateStaticBlurData()}
                            placeholder="blur"
                            style={{ objectFit: 'cover' }}
                            className={`rounded-[14px] h-full ${index === currentIndex ? 'block' : 'hidden'}`}
                            loading={index === currentIndex ? 'eager' : 'lazy'}
                          />
                        ) : (
                          <div style={{ display: 'none' }} />
                        )}
                      </PhotoView>
                    ))}

                    <div className="absolute bottom-0 w-full bg-black/60 p-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20 translate-y-0 md:translate-y-full">
                      <p className="text-sm text-white text-center">
                        Майстер:{' '}
                        <Link
                          href={`/team/${currentPhoto.slug}`}
                          className="text-[#D7A908] underline hover:text-yellow transition uppercase"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {currentPhoto.master}
                        </Link>
                      </p>
                    </div>

                    <div className="absolute top-2 right-2 flex items-center gap-1 z-30 pointer-events-none">
                      <div className="flex items-center gap-2 px-2 py-1 text-[10px] mt-1 text-white bg-black/60 rounded animate-pulse">
                        Клiк
                        <MousePointerClick className="w-5 h-5 text-white animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </PhotoProvider>
            )}
          </div>
        </div>

        {validPhotos.length > 1 && (
          <div
            className="block absolute right-[-20px] md:right-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
            onClick={goToNext}
          >
            <motion.div
              className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity"
              key={validPhotos[nextIndex]?.id}
              variants={isDesktop ? sideVariants : undefined}
              initial={isDesktop ? 'enterRight' : undefined}
              animate={isDesktop ? 'center' : undefined}
              exit={isDesktop ? 'exitRight' : undefined}
            >
              {validPhotos[nextIndex]?.src && (
                <Image
                  src={validPhotos[nextIndex].src}
                  alt={`Preview ${validPhotos[nextIndex]?.master || ''}`}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // blurDataURL={generateStaticBlurData()}
                  // placeholder="blur"
                  style={{ objectFit: 'cover' }}
                  className="rounded-[24px]"
                  loading="lazy"
                />
              )}
              <div className="md:hidden absolute right-[-10px] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="flex items-center justify-center w-8 h-8 bg-black/60 rounded-full animate-pulse">
                  <ChevronRight className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center justify-end mt-3">
              <span className="hidden lg:block mr-3 text-[12px] text-[#FBFBFB]">
                Наступне фото
              </span>
              <NextPhoto />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
