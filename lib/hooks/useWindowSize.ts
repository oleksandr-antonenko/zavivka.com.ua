'use client';

import { useState, useEffect } from 'react';

interface WindowSize {
  isMobile: boolean;
}

export const useWindowSize = (breakpoint = 768): WindowSize => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return { isMobile };
};
