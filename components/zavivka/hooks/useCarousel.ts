import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Photo } from '@/components/zavivka/photos';

export function useCarousel(filteredPhotos: Photo[]) {
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastSwipeTime, setLastSwipeTime] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const validPhotos = useMemo(
    () =>
      filteredPhotos.filter(
        (photo) =>
          Boolean(photo?.src) && photo?.slug && photo?.master && photo?.id,
      ),
    [filteredPhotos],
  );

  const totalPhotos = validPhotos.length;

  const [currentPhotoId, setCurrentPhotoId] = useState(
    validPhotos[0]?.id || '',
  );

  const currentIndex = validPhotos.findIndex(
    (photo) => photo.id === currentPhotoId,
  );

  useEffect(() => {
    if (validPhotos.length > 0) {
      setCurrentPhotoId(validPhotos[0].id);
    }
  }, [filteredPhotos, validPhotos]);

  const goToPrevious = useCallback(() => {
    if (totalPhotos <= 1 || isAnimating) return;
    const newIndex = currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1;
    if (!validPhotos[newIndex]?.src) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentPhotoId(validPhotos[newIndex].id);
  }, [currentIndex, totalPhotos, validPhotos, isAnimating]);

  const goToNext = useCallback(() => {
    if (totalPhotos <= 1 || isAnimating) return;
    const newIndex = currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1;
    if (!validPhotos[newIndex]?.src) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentPhotoId(validPhotos[newIndex].id);
  }, [currentIndex, totalPhotos, validPhotos, isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Логика блокировки прокрутки body при открытом лайтбоксе
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      const modals = document.querySelectorAll('[id^="containerBookingModal"]');
      modals.forEach((modal) => {
        (modal as HTMLElement).style.zIndex = '9999';
      });
    } else {
      document.body.style.overflow = 'unset';
      const modals = document.querySelectorAll('[id^="containerBookingModal"]');
      modals.forEach((modal) => {
        (modal as HTMLElement).style.zIndex = '10000';
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
      const modals = document.querySelectorAll('[id^="containerBookingModal"]');
      modals.forEach((modal) => {
        (modal as HTMLElement).style.zIndex = '10000';
      });
    };
  }, [lightboxOpen]);

  return {
    validPhotos,
    currentIndex,
    currentPhotoId,
    setCurrentPhotoId,
    goToPrevious,
    goToNext,
    isAnimating,
    direction,
    lightboxOpen,
    setLightboxOpen,
    lastSwipeTime,
    setLastSwipeTime,
    containerRef,
  };
}
