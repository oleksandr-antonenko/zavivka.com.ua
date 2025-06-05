import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
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
  }, [isLocked]);
};
