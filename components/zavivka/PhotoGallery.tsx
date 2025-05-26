'use client';

import { useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/styles.css';
import { Photo } from '@/components/zavivka/photos';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ZoomRef {
  zoom: number;
  maxZoom: number;
  offsetX: number;
  offsetY: number;
  disabled: boolean;
  zoomIn: () => void;
  zoomOut: () => void;
  changeZoom: (
    targetZoom: number,
    rapid?: boolean,
    dx?: number,
    dy?: number,
  ) => void;
}

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
  const zoomRef = useRef<ZoomRef>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
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
      close={onClose}
      slides={slides}
      index={currentIndex}
      plugins={[Counter, Zoom]}
      counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
      zoom={{
        ref: zoomRef,
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        scrollToZoom: true,
      }}
      render={{
        buttonZoom: ({ zoom, maxZoom }) => (
          <div className="absolute left-[-100px] top-3 z-[10001] flex gap-2">
            <button
              onClick={() => zoomRef.current?.zoomIn()}
              className="p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
              disabled={zoom >= maxZoom}
            >
              <ZoomIn className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => zoomRef.current?.zoomOut()}
              className="p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
              disabled={zoom <= 1}
            >
              <ZoomOut className="w-6 h-6 text-white" />
            </button>
          </div>
        ),
        // добавим overlay к встроенному слайду
        slideFooter: ({ slide }) => (
          <div className="absolute bottom-0 left-0 right-0 z-[10001]">
            {(slide as CustomSlide).customOverlay}
          </div>
        ),
      }}
    />
  );
};

export default PhotoGallery;
