'use client';
import { Dispatch, SetStateAction } from 'react';

interface MobileFilterProps {
  options: string[];
  setOption: Dispatch<SetStateAction<string>>;
  title: string;
  selectedValue: string;
}

export const MobileFilter = ({
  options,
  setOption,
  title,
  selectedValue,
}: MobileFilterProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-white/70">{title}</label>
      <select
        value={selectedValue}
        onChange={(e) => setOption(e.target.value)}
        className="bg-white/10 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
