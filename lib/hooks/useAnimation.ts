'use client';

import { useState, useEffect } from 'react';

export const useAnimation = (initialState = false, delay = 500) => {
  const [isAnimating, setIsAnimating] = useState(initialState);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isAnimating, delay]);

  return {
    isAnimating,
    setIsAnimating,
  };
};
