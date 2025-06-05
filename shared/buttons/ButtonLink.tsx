import React from 'react';
import { ButtonLinkProps } from './types';
import type { FC } from 'react';
import { Link } from '@/i18n/routing';

const ButtonLink: FC<ButtonLinkProps> = ({
  link,
  children,
  type = 'button',
  onClick,
  className = '',
}) => {
  return (
    <Link href={link}>
      <button
        type={type}
        onClick={onClick}
        className={`${className} bg-orange text-center text-black py-3 px-4 md:px-8  rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg font-normal extraSm:w-[175px] sm:w-[150px] md:w-[175px]`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
