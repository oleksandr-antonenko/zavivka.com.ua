'use client';

import { SpriteSVGSocial } from '@/shared/svg';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { ReviewProps } from './type';
import { motion } from 'framer-motion';

type CardProps = ReviewProps['reviews'][number];

export const Card: FC<CardProps> = ({
  image,
  clientName,
  reviewText,
  social,
  socialLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // первое определение
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isVideo = image?.endsWith('.mp4');

  const MediaContent = () => {
    if (isVideo) {
      return (
        <video
          src={image}
          className="w-full h-full object-cover rounded-[20px]"
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    return (
      <Image
        src={`${image}`}
        alt={clientName}
        sizes="100vw"
        width={0}
        height={0}
        className="w-full h-full object-cover rounded-[20px]"
      />
    );
  };

  return (
    <div
      className="group relative border border-orange rounded-[20px] overflow-hidden mx-auto w-full max-w-[250px] sm:min-w-[284px] md:min-w-0 md:max-w-none p-[20px] h-full cursor-pointer"
      onMouseEnter={() => isDesktop && setIsHovered(true)}
      onMouseLeave={() => isDesktop && setIsHovered(false)}
    >
      {/* Только для десктопа */}
      {isDesktop && (
        <div className="hidden md:block w-full h-[250px] perspective">
          <motion.div
            animate={{ rotateY: isHovered ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute w-full h-full backface-hidden">
              <MediaContent />
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-transparent rounded-[20px] p-4 flex items-center justify-center overflow-y-auto">
              <p className="font-mali text-[12px] text-start max-h-full overflow-y-auto">
                {reviewText}
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Мобильный вариант */}
      {!isDesktop && (
        <>
          <div className="w-full h-[230px] sm:h-[250px]">
            <MediaContent />
          </div>
          <div className="font-mali text-[12px] mt-2 px-2 text-start h-[100px] overflow-y-auto">
            {reviewText}
          </div>
        </>
      )}

      {/* Информация о пользователе */}
      <div className="flex gap-3 items-center mt-3 pl-[10px]">
        {socialLink && social && (
          <a href={socialLink} target="_blank" rel="noopener noreferrer">
            <SpriteSVGSocial name={social} />
          </a>
        )}
        <p className="text-[14px]">{clientName}</p>
      </div>
    </div>
  );
};
