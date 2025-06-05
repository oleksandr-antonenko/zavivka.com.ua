'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Photo } from './photos';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useWindowSize } from '@/lib/hooks/useWindowSize';

interface PhotoSliderProps {
  photos: Photo[];
}

const PhotoSlider = ({ photos }: PhotoSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useWindowSize();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <div className="relative w-full h-full">
        <Image
          src={photos[currentIndex].src}
          alt={`Фото ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={currentIndex === 0}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
