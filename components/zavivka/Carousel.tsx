'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Photo } from '@/components/zavivka/photos';
import { NextPhoto } from '@/components/zavivka/NextPhoto';
import { PreviousPhoto } from '@/components/zavivka/PreviousPhoto';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Link from 'next/link';

type CarouselProps = {
  filteredPhotos: Photo[];
};

const Carousel = ({ filteredPhotos }: CarouselProps) => {
  // Фильтруем только фото с валидным src
  const validPhotos = filteredPhotos.filter((photo) => Boolean(photo?.src));
  const totalPhotos = validPhotos.length;
  const validInfoMasters = filteredPhotos
    .filter((info) => info.slug && info.master) // фильтрация по наличию slug и master
    .map((info) => ({
      slug: info.slug,
      master: info.master,
    }));

  const [currentIndex, setCurrentIndex] = useState(0);

  // Сбрасываем currentIndex при изменении filteredPhotos
  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredPhotos]);

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
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (totalPhotos <= 1) return;
    const newIndex = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;
    if (!validPhotos[newIndex]?.src) return;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalPhotos) {
      setCurrentIndex(index);
    }
  };

  const prevIndex = currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1;
  const nextIndex = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;

  return (
    <PhotoProvider>
      <div className="w-full md:w-3/4 flex flex-col h-full">
        <div className="relative flex items-center justify-center h-[450px] md:h-[550px]">
          {/* Previous Photo */}
          {validPhotos.length > 1 && (
            <div
              className="block absolute left-[-20px] md:left-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
              onClick={goToPrevious}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity">
                <Image
                  src={validPhotos[prevIndex]?.src}
                  alt={`Preview ${prevIndex}`}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-[24px]"
                />
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
          <div className="w-full max-w-[306px] h-full md:max-w-full md:w-[450px] px-2 md:px-4 cursor-pointer">
            <div className="relative w-full h-full rounded-lg overflow-hidden z-10 group">
              {validPhotos[currentIndex]?.src && (
                <>
                  {/* Это часть, которая открывает модалку */}
                  <PhotoView src={validPhotos[currentIndex].src}>
                    <div className="absolute inset-0 cursor-pointer z-10" />
                  </PhotoView>

                  <Image
                    src={validPhotos[currentIndex].src}
                    alt={`Photo ${currentIndex + 1}`}
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-[14px] h-full pointer-events-none"
                    priority
                  />

                  {/* Ховер блок с мастером */}
                  {validInfoMasters[currentIndex] && (
                    <div className="absolute bottom-0 w-full bg-black/60 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                      <p className="text-sm text-white text-center">
                        Майстер:{' '}
                        <Link
                          href={`/team/${validInfoMasters[currentIndex].slug}`}
                          className="text-[#D7A908] underline hover:text-yellow transition uppercase"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {validInfoMasters[currentIndex].master}
                        </Link>
                      </p>
                    </div>
                  )}
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
                <Image
                  src={validPhotos[nextIndex]?.src}
                  alt={`Preview ${nextIndex}`}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-[24px]"
                />
              </div>

              <div className="hidden md:flex items-center justify-end mt-3">
                <span className="hidden lg:block mr-3 text-[12px] text-[#FBFBFB]">
                  Наступне фото
                </span>
                <NextPhoto />
              </div>
            </div>
          )}

          {/* Mobile Pagination Dots */}
          {totalPhotos > 1 && (
            <div className="absolute bottom-[-30px] left-0 right-0 flex justify-center md:hidden">
              <div className="flex space-x-2">
                {validPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentIndex === index
                        ? 'bg-white-light'
                        : 'bg-gray-400/50 border-[1px] border-yellow-border'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Carousel;
