import React from 'react';
import type {FC} from 'react';
import { PriceProps } from './type';

const ServiceForPrice: FC<PriceProps> = ({servicePrices, onClick, currentChoice}) => {
  return (
      <ul className='max-w-[720px]'>
        {servicePrices.map((service, index) => (
                    <li
                      key={`service-name-${index}`}
                      data-target={`service-${index}`}
                      onClick={() => onClick && onClick(index)}
                    >
                      <div className={`flex justify-between items-center text-[16px] md:text-[20px] xl:text-[24px] md:mb-[54px] cursor-pointer text-wrap sm:text-nowrap pr-3 md:pr-7 xl:pr-[60px] max-w-[520px] ${index === currentChoice ? "mb-4 border-b-[3px] border-orange md:max-w-[720px]" : "mb-[39px] md:mr-[50px] 2xl:mr-[200px] border-b-[0.5px] border-grey-light"}`}>
                        {service.serviceTitle}
                        <span className='block md:hidden'>{service.priceExpert} грн</span>
                      </div>
                      <div className={`text-[16px] mb-[30px] ${currentChoice === index ? "block md:hidden" : "hidden"}`}>
                        <div className='listFromBackPrice'>{service.descriptionForPrice}</div>
                        <ul className="mt-6 flex gap-4 text-[12px]">
                          <li className='p-[10px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-4 w-[107px]'>
                            <p>Експерт</p>
                            <p className='text-orange font-bold'>{service.priceExpert} грн</p>
                          </li>
                          <li className='p-[10px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-4 w-[107px]'>
                            <p>Арт-директор</p>
                            <p className='text-orange font-bold'>{service.priceArtDir} грн</p>
                          </li>
                          <li className='p-[10px] rounded-md border border-grey-light flex flex-col items-center justify-center gap-4 w-[107px]'>
                            <p>Топ Майстер</p>
                            <p className='text-orange font-bold'>{service.priceTop} грн</p>
                          </li>
                        </ul>
                      </div>
                    </li>
              ))}
      </ul>
  
  )
}

export default ServiceForPrice
