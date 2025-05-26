'use client';

import { useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/styles.css';
import { Photo } from '@/components/zavivka/photos';

interface CustomSlide extends Slide {
  customOverlay?: React.ReactNode;
}

interface PhotoGalleryProps {
  photos: Photo[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
}

const PhotoGallery = ({
  photos,
  isOpen,
  currentIndex,
  onClose,
}: PhotoGalleryProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const slides = useMemo<CustomSlide[]>(
    () =>
      photos.map((photo) => ({
        src: photo.src,
        alt: `Фото від ${photo.master || ''}`,
        customOverlay: (
          <div className="text-center">
            <p className="text-sm text-white">
              Майстер:{' '}
              <Link
                href={`/team/${photo.slug}`}
                className="text-[#D7A908] underline hover:text-yellow transition uppercase"
              >
                {photo.master}
              </Link>
            </p>
          </div>
        ),
      })),
    [photos],
  );

  return (
    <Lightbox
      open={isOpen}
      plugins={[Counter]}
      counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
      close={onClose}
      slides={slides}
      index={currentIndex}
      carousel={{
        finite: false,
        preload: 2,
      }}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
      animation={{
        fade: 500,
      }}
      render={{
        slide: ({ slide }) => (
          <div className="relative w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt || ''}
              className="w-full h-full object-contain"
              fill
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 z-[10001]">
              {(slide as CustomSlide).customOverlay}
            </div>
          </div>
        ),
      }}
      styles={{
        container: {
          zIndex: 100,
        },
      }}
      on={{
        click: () => onClose(),
      }}
    />
  );
};

export default PhotoGallery;
