'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Photo } from '@/components/zavivka/photos';
import { NextPhoto } from '@/components/zavivka/NextPhoto';
import { PreviousPhoto } from '@/components/zavivka/PreviousPhoto';

type CarouselProps = {
  filteredPhotos: Photo[];
};

const Carousel = ({ filteredPhotos }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (filteredPhotos.length === 0) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-xl text-center">
          Немає фотографій за вашими фільтрами
        </p>
      </div>
    );
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? filteredPhotos.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === filteredPhotos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Get previous and next photos for side preview
  const prevIndex =
    currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="w-full md:w-3/4 flex flex-col h-full">
      <div className="relative flex items-center justify-center h-[450px] md:h-[550px]">
        {/* Previous Photo (Left Side) */}
        <div
          className="block absolute left-[-20px] md:left-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
          onClick={goToPrevious}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity">
            <Image
              src={filteredPhotos[prevIndex]?.src}
              alt={`Preview ${prevIndex}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-[24px]"
            />
          </div>
          <div className="hidden md:flex items-center mt-3">
            <PreviousPhoto />
            <span className="hidden lg:block ml-3 font-normal text-[12px] leading-[135%] tracking-[0%] text-[#FBFBFB]">
              Попереднє фото
            </span>
          </div>
        </div>

        {/* Main Photo (Center) */}
        <div className="w-full max-w-[306px] h-full md:max-w-full md:w-[450px] px-2 md:px-4">
          <div className="relative w-full h-full rounded-lg overflow-hidden z-10">
            <Image
              src={filteredPhotos[currentIndex]?.src}
              alt={`Photo ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-[14px] h-full"
              priority
            />
          </div>
        </div>

        {/* Next Photo (Right Side) */}
        <div
          className="block absolute right-[-20px] md:right-[0px] md:w-[200px] w-2/5 md:h-[200px] h-[70%] cursor-pointer"
          onClick={goToNext}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity">
            <Image
              src={filteredPhotos[nextIndex]?.src}
              alt={`Preview ${nextIndex}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-[24px]"
            />
          </div>
          <div className="hidden md:flex items-center justify-end mt-3">
            <span className="hidden lg:block mr-3 font-normal text-[12px] leading-[135%] tracking-[0%] text-[#FBFBFB]">
              Наступне фото
            </span>
            <NextPhoto />
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="absolute bottom-[-30px] left-0 right-0 flex justify-center md:hidden">
          <div className="flex space-x-2">
            {filteredPhotos.map((_, index) => (
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
      </div>
    </div>
  );
};

export default Carousel;
