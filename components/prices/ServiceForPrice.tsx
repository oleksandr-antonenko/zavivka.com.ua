import React from 'react';
import type {FC} from 'react';
import { PriceProps } from './type';

const ServiceForPrice: FC<PriceProps> = ({servicePrices, onClick, currentChoice}) => {
  return (
    <>
      {servicePrices.map((service, index) => (
              <li
                key={`service-name-${index}`}
                data-target={`service-${index}`}
                className={`mb-[54px] cursor-pointer ${index === currentChoice ? "border-b-[3px] border-orange md:w-500px" : "mr-[50px] 2xl:mr-[200px] border-b-[0.5px] border-grey-light md:w-[440px]"}`}
                onClick={() => onClick && onClick(index)}
              >
                {service.serviceTitle}
                <span className='block md:hidden'>{service.priceExpert} грн</span>
              </li>
            ))}
    </>
  )
}

export default ServiceForPrice
