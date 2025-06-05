'use client';

import { useMemo, useRef } from 'react';
import { Link } from '@/i18n/routing';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/styles.css';
import { Photo } from '@/components/zavivka/photos';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { useScrollLock } from '@/lib/hooks/useScrollLock';

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
  useScrollLock(isOpen);

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
      index={currentIndex}
      slides={slides}
      plugins={[Counter, Zoom]}
      zoom={{
        ref: zoomRef,
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true,
      }}
      carousel={{
        finite: false,
        preload: 2,
        padding: '16px',
        spacing: '16px',
        imageFit: 'contain',
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
      render={{
        buttonPrev: slides.length <= 1 ? () => null : undefined,
        buttonNext: slides.length <= 1 ? () => null : undefined,
        iconZoomIn: () => <ZoomIn className="w-6 h-6" />,
        iconZoomOut: () => <ZoomOut className="w-6 h-6" />,
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
