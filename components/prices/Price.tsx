import React from 'react';
import type {FC} from 'react';
import { PriceProps } from './type';
import Image from "next/image";

const Price: FC<PriceProps> = ({servicePrices, currentChoice}) => {
  return (
    <>
      {servicePrices.map((service, index) => (
              <div
                id={service.id}
                key={service.id}
                className={`rounded-[20px] border-[3px] py-11 px-10 border-orange ${currentChoice === index ? "block" : "hidden"}`}
              >
                <div className="flex gap-[50px] items-center mb-[60px]">
                  <div className='max-w-[239px] hidden md:block'>
                      <Image
                        src={service.imageForPrice}
                        alt={service.serviceTitle}
                        className='w-full rounded-[20px]'
                        sizes='vw'
                        width={0}
                        height={0}
                      />
                  </div>
                  <div>
                    <p className="font-bold text-[16px] mb-[30px] hidden md:block">{service.serviceTitle}</p>
                    <div className='text-[16px]'>{service.descriptionForPrice}</div>
                  </div>
                </div>
                <ul className="flex items-center gap-[30px] text-[16px] font-bold md:flex-wrap xl:flex-nowrap">
                  <li className='p-[15px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-[10px] w-[155px]'>
                    <p>Експерт</p>
                    <p className='text-orange'>{service.priceExpert} грн</p>
                  </li>
                  <li className='p-[15px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-[10px] w-[155px]'>
                    <p>Арт-директор</p>
                    <p className='text-orange'>{service.priceArtDir} грн</p>
                  </li>
                  <li className='p-[15px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-[10px] w-[155px]'>
                    <p>Топ Майстер</p>
                    <p className='text-orange'>{service.priceTop} грн</p>
                  </li>
                </ul>
              </div>
            ))}
    </>
  )
}

export default Price
