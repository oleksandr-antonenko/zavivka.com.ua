import Image from 'next/image';
import { ReactNode } from 'react';

interface DecoratedTitleProps {
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  decorClassName?: string;
}

const DecoratedTitle = ({
  children,
  className,
  titleClassName,
  decorClassName,
}: DecoratedTitleProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/decor-title.svg"
        alt="decor title image"
        width={10}
        height={10}
        className={`${decorClassName} absolute top-[20px] xl:top-[60px] left-[-5px] xl:left-[-85px] w-[95px] h-[40px] xl:w-[191px] xl:h-[81px] z-[-1]`}
      />
      <h2
        className={`font-bold text-center md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase ${titleClassName}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default DecoratedTitle;
