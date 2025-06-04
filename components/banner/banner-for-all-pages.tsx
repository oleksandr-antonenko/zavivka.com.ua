'use client';

import TypingHeader from '../ui/typing-header';
import Image from 'next/image';
import { useState } from 'react';
import PopUpBanner from '../pop-up/PopUpBanner';
import { useMediaQuery } from '@react-hook/media-query';

interface BannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  videoSrc: string;
  posterSrc: string; // путь к картинке (jpg, webp и т.д.)
  isCorrection?: boolean;
  isTherapy?: boolean;
}

const BannerForAllPages = ({
  title,
  description,
  buttonText,
  buttonLink,
  videoSrc,
  posterSrc,
  isCorrection = false,
  isTherapy = false,
}: BannerProps) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleButtonClick = (e: React.MouseEvent) => {
    if (isCorrection || isTherapy) {
      return; // Если это страница коррекции или терапии, просто позволяем ссылке работать
    }
    e.preventDefault(); // Предотвращаем переход по ссылке
    setIsPopUpOpen(true); // Открываем попап
  };

  return (
    <section className="w-full relative h-[800px]">
      {/* Мобильное изображение как фон */}
      {!isDesktop && (
        <div className="absolute z-[-10] top-0 left-0 w-full h-full">
          <Image
            src={posterSrc}
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Видео — для планшетов и выше */}
      {isDesktop && (
        <video
          className="absolute z-[-10] top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          disablePictureInPicture
          controls={false}
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="flex max-w-[1440px] 2xl:mx-auto flex-col px-2 py-[60px] md:py-[195px] w-full h-full">
        <div className="text-2xl text-white mt-auto md:mt-0 w-full max-w-[800px]">
          <TypingHeader text={title} />
        </div>

        {description && (
          <p className="mb-[23px] md:mb-[100px] w-full max-w-[360px] mx-auto md:mx-0 mt-[50px] md:mt-0 text-center text-[20px] md:text-start">
            {description}
          </p>
        )}

        <a href={buttonLink} target="_blank" onClick={handleButtonClick}>
          <button className="rounded-[40px] h-[56px] flex justify-center items-center text-[#212121] text-[20px] w-full max-w-[280px] md:max-w-[361px] mx-auto md:mx-0 transition duration-300 bg-[#D7A908] hover:bg-[#f8cf38]">
            {buttonText}
          </button>
        </a>
      </div>

      <PopUpBanner
        visible={isPopUpOpen}
        close={() => setIsPopUpOpen(false)}
        forMen={false}
      />
    </section>
  );
};

export default BannerForAllPages;
