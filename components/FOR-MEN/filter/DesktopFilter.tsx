'use client';
import { Dispatch, SetStateAction } from 'react';

interface DesktopFilterProps {
  options: string[];
  setOption: Dispatch<SetStateAction<string>>;
  title: string;
  selectedValue: string;
}

export const DesktopFilter = ({
  options,
  setOption,
  title,
  selectedValue,
}: DesktopFilterProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-medium">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setOption(option)}
            className={`text-left px-4 py-2 rounded-lg transition-colors ${
              selectedValue === option
                ? 'bg-white text-black'
                : 'hover:bg-white/10'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
