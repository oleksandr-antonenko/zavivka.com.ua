'use client';
import DecoratedTitle from '../ui/decorated-title/decorated-title';
import ConsultationDesktop from './consultation-desktop';
import ConsultationMobile from './consultation-mobile';
import { useState, useEffect } from 'react';

const ConsultationContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // первое определение
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <DecoratedTitle className="max-w-[250px] md:max-w-[700px] mx-auto md:mx-0 mb-[30px] md:mb-[20px]">
        вам необхідна консультація <br /> з майстром, якщо
      </DecoratedTitle>
      <p className="max-w-[725px] text-[16px] md:text-[24px] text-white text-center md:text-start mb-[40px]">
        Ми відмовимо вас від завивки, якщо вам або вашому волоссю вона не
        підійде
      </p>
      {isMobile ? <ConsultationMobile /> : <ConsultationDesktop />}
    </section>
  );
};

export default ConsultationContainer;
