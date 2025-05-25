'use client';

import { useEffect, useMemo, useState } from 'react';
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

type CarouselProps = {
  filteredPhotos: Photo[];
};

const Carousel = ({ filteredPhotos }: CarouselProps) => {
  const [direction, setDirection] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
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

  // Используем id вместо индекса
  const [currentPhotoId, setCurrentPhotoId] = useState(
    validPhotos[0]?.id || '',
  );

  // Находим текущий индекс по id
  const currentIndex = validPhotos.findIndex(
    (photo) => photo.id === currentPhotoId,
  );
  const currentPhoto = validPhotos[currentIndex];

  // Сбрасываем currentPhotoId при изменении filteredPhotos
  useEffect(() => {
    if (validPhotos.length > 0) {
      setCurrentPhotoId(validPhotos[0].id);
    }
  }, [filteredPhotos, validPhotos]);

  // Если фото нет вообще
  if (filteredPhotos.length === 0) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-xl text-center">
          Немає фотографій за вашими фільтрами
        </p>
      </div>
    );
  }

  // Если фото есть, но все без src (недоступны для показа)
  if (filteredPhotos.length > 0 && totalPhotos === 0) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-xl text-center">
          Фото знайдено, але вони недоступні для показу
        </p>
      </div>
    );
  }

  const goToPrevious = () => {
    if (totalPhotos <= 1) return;
    const newIndex = currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1;
    if (!validPhotos[newIndex]?.src) return;
    setDirection(-1);
    setCurrentPhotoId(validPhotos[newIndex].id);
  };

  const goToNext = () => {
    if (totalPhotos <= 1) return;
    const newIndex = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;
    if (!validPhotos[newIndex]?.src) return;
    setDirection(1);
    setCurrentPhotoId(validPhotos[newIndex].id);
  };

  const prevIndex = currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1;
  const nextIndex = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;

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
    <div className="w-full md:w-3/4 flex flex-col h-full">
      <div className="relative flex items-center justify-center h-[450px] md:h-[550px]">
        {/* Previous Photo */}
        {validPhotos.length > 1 && (
          <div
            className="block absolute left-[-20px] md:left-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
            onClick={goToPrevious}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity">
              {validPhotos[prevIndex]?.src && (
                <Image
                  src={validPhotos[prevIndex].src}
                  alt={`Preview ${validPhotos[prevIndex]?.master || ''}`}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-[24px]"
                />
              )}
              {/* Mobile Navigation Arrow - Left */}
              <div className="md:hidden absolute left-[20px] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="flex items-center justify-center w-8 h-8 bg-black/60 rounded-full animate-pulse">
                  <ChevronLeft className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center mt-3">
              <PreviousPhoto />
              <span className="hidden lg:block ml-3 text-[12px] text-[#FBFBFB]">
                Попереднє фото
              </span>
            </div>
          </div>
        )}

        {/* Main Photo */}
        <div className="w-full max-w-[346px] h-full md:max-w-full md:w-[450px] px-2 md:px-4 cursor-pointer">
          <div
            {...handlers}
            className="relative w-full h-full rounded-lg overflow-hidden z-10 group"
          >
            {currentPhoto?.src && (
              <>
                <PhotoProvider
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
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentPhotoId}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full relative"
                    >
                      {validPhotos.map((photo, index) => (
                        <PhotoView key={photo.id} src={photo.src}>
                          {index === currentIndex ? (
                            <Image
                              src={photo.src}
                              alt={`Фото від ${photo.master || ''}`}
                              fill
                              quality={60}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              style={{ objectFit: 'cover' }}
                              className="rounded-[14px] h-full"
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
              </>
            )}
          </div>
        </div>

        {/* Next Photo */}
        {validPhotos.length > 1 && (
          <div
            className="block absolute right-[-20px] md:right-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
            onClick={goToNext}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity">
              {validPhotos[nextIndex]?.src && (
                <Image
                  src={validPhotos[nextIndex].src}
                  alt={`Preview ${validPhotos[nextIndex]?.master || ''}`}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-[24px]"
                />
              )}
              {/* Mobile Navigation Arrow - Right */}
              <div className="md:hidden absolute right-[-10px] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="flex items-center justify-center w-8 h-8 bg-black/60 rounded-full animate-pulse">
                  <ChevronRight className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
            </div>

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
