import type { FC } from 'react';
import { motion } from 'framer-motion';
import { PriceProps } from './type';

const ServiceForPrice: FC<PriceProps> = ({
  servicePrices,
  onClick,
  currentChoice,
  haircut,
}) => {
  return (
    <ul className="flex flex-col w-full max-w-full lg:max-w-[850px]">
      <li className="hidden lg:flex text-[16px] font-bold text-[#eaeaea] ml-auto mr-[50px]">
        <p className="px-[30px]">Експерт</p>
        <p className="px-[30px]">Арт-директор</p>
        <p className="px-[30px]">Топ Майстер</p>
      </li>

      {servicePrices.map((service, index) => (
        <li
          key={`service-name-${index}`}
          data-target={`service-${index}`}
          onClick={() => onClick && onClick(index)}
          className="w-full"
        >
          <div
            className={`relative pb-[5px] flex justify-between items-center text-[16px] md:text-[20px] xl:text-[24px] md:mb-[54px] cursor-pointer text-wrap sm:text-nowrap 
              ${index === 0 ? 'mt-[39px]' : ''} 
              ${index === servicePrices.length - 1 ? 'lg:mb-0' : ''} 
              ${index !== currentChoice ? 'mb-[39px] lg:mr-[50px] border-b-[0.5px] border-grey-light' : 'mb-4'}
            `}
          >
            {service.serviceTitle}

            <span className="block lg:hidden">
              {!haircut
                ? service.priceExpert
                : haircut && service.priceExpertCut
                  ? service.priceExpertCut
                  : service.priceExpert}{' '}
              грн
            </span>

            <div
              className={`hidden lg:flex text-[16px] text-[#fbfbfb] ${index === currentChoice ? 'mr-[50px]' : ''}`}
            >
              <div className="px-[30px]">від {service.priceExpert} грн</div>
              <div className="px-[30px] border-l-[0.5px] border-r-[0.5px] border-grey-light">
                від {service.priceArtDir} грн
              </div>
              <div className="px-[30px]">від {service.priceTop} грн</div>
            </div>

            {/* Анимация подчеркивания */}
            {index === currentChoice && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 h-[3px] bg-orange w-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ width: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            )}
          </div>

          <div
            className={`text-[16px] mb-[30px] ${
              currentChoice === index ? 'block lg:hidden' : 'hidden'
            }`}
          >
            <div className="listFromBackPrice">
              {service.descriptionForPrice}
            </div>

            <ul className="mt-6 flex gap-4 text-[12px]">
              {['Експерт', 'Арт-директор', 'Топ Майстер'].map((title, i) => {
                const price = !haircut
                  ? [
                      service.priceExpert,
                      service.priceArtDir,
                      service.priceTop,
                    ][i]
                  : [
                      service.priceExpertCut || service.priceExpert,
                      service.priceArtDirCut || service.priceArtDir,
                      service.priceTopCut || service.priceTop,
                    ][i];
                return (
                  <li
                    key={title}
                    className="p-[10px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-4 w-[107px]"
                  >
                    <p>{title}</p>
                    <p className="text-orange font-bold">{price} грн</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceForPrice;
