import React from 'react';
import type {FC} from 'react';
import { MemberServiceProps } from './type';

const MemberService: FC<MemberServiceProps> = ({servicePrices, onClick, currentChoice}) => {
  return (
      <ul className='text-[16px] max-w-[800px]'>
        {servicePrices.map((service, index) => (
                    <li
                      key={`service-name-${index}`}
                      data-target={`service-${index}`}
                      onClick={() => onClick && onClick(index)}
                    >
                      <p className={`flex justify-between items-center font-bold cursor-pointer text-wrap sm:text-nowrap pr-3 max-w-[700px] ${index === currentChoice ? "mb-[16px] border-b-[3px] border-orange" : "mb-[39px] border-b-[0.5px] border-grey-light"}`}>
                        {service.serviceTitle}
                        <span className='w-1/2 text-end'>{service.price} грн</span>
                      </p>
                      <div className={`mb-[30px] ${currentChoice === index ? "block" : "hidden"}`}>
                        <div className='listFromBackPrice'>{service.descriptionForPrice}</div>
                      </div>
                    </li>
              ))}
      </ul>
  )
}

export default MemberService;
