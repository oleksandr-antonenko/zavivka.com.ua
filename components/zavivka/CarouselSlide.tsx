'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MousePointerClick } from 'lucide-react';
import { Photo } from './photos';
import { useState } from 'react';

type CarouselSlideProps = {
  photo: Photo;
  index: number;
  isCurrent: boolean;
  direction: number;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};

const centerSlideVariants = {
  enter: () => ({
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
  },
  exit: () => ({
    zIndex: 0,
    opacity: 0,
    scale: 0.8,
  }),
};

export const CarouselSlide = ({
  photo,
  isCurrent,
  direction,
}: CarouselSlideProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  if (!photo?.src) return null;

  return (
    <motion.div
      key={photo.id}
      className={`relative w-full h-full rounded-lg overflow-hidden ${
        isCurrent ? 'opacity-100' : 'opacity-70 hover:opacity-90'
      } transition-opacity`}
      variants={isCurrent ? centerSlideVariants : slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={direction}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { type: 'spring', stiffness: 300, damping: 30 },
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
        style={{
          objectFit: 'cover',
          opacity: 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
        className="rounded-[24px]"
        priority={isCurrent}
        loading={isCurrent ? 'eager' : 'lazy'}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
          setIsImageLoaded(true);
        }}
      />
      {/* Плавное появление контента после загрузки */}
      {isCurrent && isImageLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        >
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
        </motion.div>
      )}
    </motion.div>
  );
};
