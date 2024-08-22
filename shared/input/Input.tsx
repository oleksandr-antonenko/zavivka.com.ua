import React from 'react';
import type {FC} from 'react';
import { InputProps } from './type';

const Input: FC<InputProps> = ({register, type, id, placeholder, name, errors, errorText=""}) => {
  return (
    <div>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            {...register(name, { required: true})}
            className={`${errors[name] ? "border-red-500" : "border-grey-light"} rounded py-3 px-[30px] border bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange text-[16px] text-white w-full placeholder:text-white placeholder:text-[12px] placeholder:font-banner`}
        />
         <div className="text-[12px] text-red-500 pl-5">
            {errors[name] && <p>{errorText}</p>}
         </div>
    </div>
  )
}

export default Input
