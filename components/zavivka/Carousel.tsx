import { useState } from "react";
import Image from "next/image";
import { Photo } from "@/components/zavivka/photos";
import { NextPhoto } from "@/components/zavivka/NextPhoto";
import { PreviousPhoto } from "@/components/zavivka/PreviousPhoto";

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
    <div className="w-full md:w-3/4 flex flex-col">
      <div className="relative flex items-center justify-center h-[600px] md:h-[700px]">
        {/* Previous Photo (Left Side) */}
        <div
          className="block absolute left-0 md:w-1/5 w-2/5 md:h-1/5 h-2/5 cursor-pointer"
          onClick={goToPrevious}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity">
            <Image
              src={filteredPhotos[prevIndex].src}
              alt={`Preview ${prevIndex}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="hidden md:flex items-center mt-3">
            <PreviousPhoto />
            <span className="ml-3 font-normal text-[12px] leading-[135%] tracking-[0%] text-[#FBFBFB]">
              Попереднє фото
            </span>
          </div>
        </div>

        {/* Main Photo (Center) */}
        <div className="w-full md:w-3/5 h-3/5 px-2 md:px-4">
          <div className="relative w-full h-full rounded-lg overflow-hidden z-10">
            <Image
              src={filteredPhotos[currentIndex].src}
              alt={`Photo ${currentIndex + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Next Photo (Right Side) */}
        <div
          className="block absolute right-0 md:w-1/5 w-2/5 md:h-1/5 h-2/5 cursor-pointer"
          onClick={goToNext}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden opacity-70 hover:opacity-90 transition-opacity">
            <Image
              src={filteredPhotos[nextIndex].src}
              alt={`Preview ${nextIndex}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="hidden md:flex items-center justify-end mt-3">
            <span className="mr-3 font-normal text-[12px] leading-[135%] tracking-[0%] text-[#FBFBFB]">
              Наступне фото
            </span>
            <NextPhoto />
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center md:hidden">
          <div className="flex space-x-2">
            {filteredPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-white-light"
                    : "bg-gray-400/50 border-[1px] border-yellow-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/*/!* Photo Information *!/*/}
      {/*<div className="mt-4 px-4">*/}
      {/*  <div className="flex justify-between items-center mb-2">*/}
      {/*    <p className="text-lg">*/}
      {/*      <span className="text-yellow-400">Майстер:</span>{" "}*/}
      {/*      {filteredPhotos[currentIndex].master}*/}
      {/*    </p>*/}
      {/*    <p className="text-sm">*/}
      {/*      {currentIndex + 1} / {filteredPhotos.length}*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className="flex flex-wrap gap-2">*/}
      {/*    <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm">*/}
      {/*      {filteredPhotos[currentIndex].hairLength}*/}
      {/*    </span>*/}
      {/*    <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm">*/}
      {/*      {filteredPhotos[currentIndex].curlSize} завиток*/}
      {/*    </span>*/}
      {/*    <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm">*/}
      {/*      {filteredPhotos[currentIndex].colored ? "Фарбоване" : "Нефарбоване"}*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*/!* Thumbnail Navigation (Optional for many photos) *!/*/}
      {/*{filteredPhotos.length > 3 && (*/}
      {/*  <div className="mt-6 px-4 overflow-x-auto">*/}
      {/*    <div className="flex gap-2">*/}
      {/*      {filteredPhotos.map((photo, index) => (*/}
      {/*        <div*/}
      {/*          key={index}*/}
      {/*          className={`relative w-16 h-16 cursor-pointer rounded-md overflow-hidden ${*/}
      {/*            currentIndex === index*/}
      {/*              ? "ring-2 ring-yellow-400"*/}
      {/*              : "opacity-70"*/}
      {/*          }`}*/}
      {/*          onClick={() => goToSlide(index)}*/}
      {/*        >*/}
      {/*          <Image*/}
      {/*            src={photo.src}*/}
      {/*            alt={`Thumbnail ${index + 1}`}*/}
      {/*            fill*/}
      {/*            style={{ objectFit: "cover" }}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default Carousel;
