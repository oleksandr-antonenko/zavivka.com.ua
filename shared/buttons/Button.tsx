import React from 'react'
import { ButtonProps } from './types';
import type { FC } from 'react'

const Button: FC<ButtonProps> = ({children, type="button", onClick, className=""}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className={`${className} bg-orange text-center text-black py-3 px-4 md:px-8 rounded transition duration-300 ease-in-out hover:shadow-lg font-normal`}
    >
      {children}
    </button>
  )
}

export default Button
