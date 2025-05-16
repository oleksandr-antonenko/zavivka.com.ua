import React from 'react';
import type { FC } from 'react';
import { PriceProps } from './type';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Price: FC<PriceProps> = ({
  servicePrices,
  currentChoice,
  forMen,
  haircut,
}) => {
  return (
    <AnimatePresence mode="wait">
      {servicePrices.map((service, index) => {
        const isActive = currentChoice === index;
        const imagePrice = !forMen
          ? service.imageForPriceWomen
          : service.imageForPriceMen;

        return isActive ? (
          <motion.div
            key={service.id}
            id={service.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {
                clipPath: 'inset(0% 100% 0% 0%)',
                opacity: 0,
              },
              visible: {
                clipPath: 'inset(0% 0% 0% 0%)',
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                },
              },
              exit: {
                clipPath: 'inset(0% 0% 0% 100%)',
                opacity: 0,
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              },
            }}
            className="w-full flex rounded-[20px] md:border-[3px] p-[30px] md:border-orange"
          >
            <div className="flex flex-col gap-[30px] w-full">
              <div className="hidden md:block">
                <Image
                  src={imagePrice}
                  alt={service.serviceTitle}
                  className="w-full rounded-[20px]"
                  sizes="vw"
                  width={0}
                  height={0}
                />
              </div>
              <p className="text-[16px] font-bold">{service.serviceTitle}</p>
              <div className="listFromBackPrice text-[16px] leading-10">
                {service.descriptionForPrice}
              </div>
            </div>
            <ul className="hidden md:gap-5 xl:gap-[30px] text-[16px] font-bold md:flex-wrap xl:flex-nowrap">
              <li className="p-[15px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-[10px] w-[155px]">
                <p>Експерт</p>
                <p className="text-orange">
                  {!haircut
                    ? service.priceExpert
                    : haircut && service.priceExpertCut
                      ? service.priceExpertCut
                      : service.priceExpert}{' '}
                  грн
                </p>
              </li>
              <li className="p-[15px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-[10px] w-[155px]">
                <p>Арт-директор</p>
                <p className="text-orange">
                  {!haircut
                    ? service.priceArtDir
                    : haircut && service.priceArtDirCut
                      ? service.priceArtDirCut
                      : service.priceArtDir}{' '}
                  грн
                </p>
              </li>
              <li className="p-[15px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-[10px] w-[155px]">
                <p>Топ Майстер</p>
                <p className="text-orange">
                  {!haircut
                    ? service.priceTop
                    : haircut && service.priceTopCut
                      ? service.priceTopCut
                      : service.priceTop}{' '}
                  грн
                </p>
              </li>
            </ul>
          </motion.div>
        ) : null;
      })}
    </AnimatePresence>
  );
};

export default Price;
