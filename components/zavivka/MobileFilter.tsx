'use client';
import { SetStateAction } from 'react';
import SelectCountry from '@/components/header/top-header/SelectCountry';

interface Props {
  setOption: (value: SetStateAction<string>) => void;
  selectedValue: string;
  title: string;
  options: string[];
}

export const MobileFilter = ({
  setOption,
  selectedValue,
  title,
  options,
}: Props) => {
  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));
  return (
    <div className="relative z-[100] w-full text-[16px]">
      <SelectCountry
        countries={selectOptions}
        name={title}
        onChangeProps={setOption}
        choice={selectedValue}
        placeholder={title}
      />
    </div>
  );
};
