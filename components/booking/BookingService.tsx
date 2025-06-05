'use client';
import type { FC } from 'react';
import { ServiceCheckboxProps } from './types';

const BookingService: FC<ServiceCheckboxProps> = ({
  servicesCheckbox,
  register,
}) => {
  return (
    <>
      {servicesCheckbox.map((service, index) => {
        const idAndName = service.name;

        return (
          <div key={idAndName} className="flex gap-4 items-center">
            <input
              type="checkbox"
              id={idAndName}
              {...register(`${idAndName}`)}
              className="appearance-none cursor-pointer peer shrink-0 relative rounded-[6px] w-[25px] h-[25px]"
            />
            <span className="absolute w-[25px] h-[25px] border border-orange rounded-[6px] pointer-events-none transition duration-300 peer-hover:bg-yellow peer-checked:bg-orange "></span>
            <label htmlFor={idAndName} className="text-[16px] sm:text-nowrap">
              {service.title}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default BookingService;
