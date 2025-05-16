'use client';
import { ButtonLink } from '@/shared/buttons';
import React, { useEffect } from 'react';
import type { FC, MouseEvent } from 'react';
import { AfterBookingProps } from './types';
import Image from 'next/image';
import closeIcone from '@/shared/img/close.png';

const AfterBooking: FC<AfterBookingProps> = ({ visible, close }) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'containerBookingModal') close();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <>
      <div
        id="containerBookingModal"
        onClick={handleClose}
        className="fixed inset-0 bg-common-background bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="py-10 px-10 md:px-[63px] bg-common-background flex flex-col items-center gap-[42px] relative">
          <button onClick={() => close()} className="absolute top-5 right-5">
            <Image
              src={closeIcone}
              alt="close"
              width={0}
              height={0}
              className="w-[15px] h-[15px]"
            />
          </button>
          <h2 className="uppercase text-[20px] text-center font-bold">
            Ваші дані надіслано
          </h2>
          <p className="text-[12px]">
            Наш менеджер зв&apos;яжеться з вами найближчим часом
          </p>
          <ButtonLink
            onClick={() => close()}
            link="/"
            className="border border-orange bg-transparent text-grey-light text-[16px] text-nowrap min-w-[217px] md:w-[304px]"
          >
            Повернутися на сайт
          </ButtonLink>
        </div>
      </div>
    </>
  );
};

export default AfterBooking;
