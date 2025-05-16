'use client';

import { SetStateAction } from 'react';

interface Props {
  setOption: (value: SetStateAction<string>) => void;
  selectedValue: string;
  title: string;
  options: string[];
}

export const DesktopFilter = ({
  setOption,
  selectedValue,
  title,
  options,
}: Props) => {
  const selectorStyles =
    'py-[8px] cursor-pointer font-normal text-[16px] leading-[135%] tracking-[0%]';
  const activeStyles = 'font-bold border-b-2 border-yellow-border';

  return (
    <div className="hidden md:block space-y-6">
      <div>
        <h2 className="font-bold text-[24px] leading-[100%] tracking-[0%] mb-[16px] text-nowrap">
          {title}
        </h2>
        {options.map((option) => (
          <div
            key={option}
            className={`${selectorStyles} ${selectedValue === option ? activeStyles : ''} flex flex-col`}
            onClick={() => setOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
