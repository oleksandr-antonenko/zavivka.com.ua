'use client';
import Image from 'next/image';
import { SelectProps, SelectT } from './types';
import React, { useId, useState } from 'react';
import type { FC } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import type { SingleValue } from 'react-select';
import arrow from './img/arrow-white.png';
import { AnimatedMenu } from './animated-menu';

const SelectCountry: FC<SelectProps> = ({
  countries,
  name,
  onChangeProps,
  placeholder,
  choice,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image
          src={arrow}
          alt="arrow"
          width={0}
          height={0}
          className="ml-2 cursor-pointer w-2 h-2"
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      menuIsOpen={isMenuOpen}
      onMenuOpen={() => setIsMenuOpen(true)}
      onMenuClose={() => setIsMenuOpen(false)}
      classNames={{
        control: (state) =>
          `border border-yellow-border px-3 text-[16px] text-white transition-all duration-300 ${
            state.menuIsOpen
              ? 'rounded-t-[8px] rounded-b-none border-b-0 bg-black/10 backdrop-blur-[20px]'
              : 'rounded-[8px]'
          }`,
        option: () =>
          'text-grey-light py-2 px-3 cursor-pointer hover:bg-yellow-border hover:text-black transition-all',

        menuList: () =>
          'max-h-60 w-full max-w-[200px] overflow-y-auto transition-all duration-300 ease-in-out',
        indicatorSeparator: () => 'hidden',
        dropdownIndicator: (state) =>
          state.selectProps.menuIsOpen
            ? 'rotate-180 transition-all ease-in-out delay-150 cursor-pointer'
            : 'transition-all ease-in-out delay-150 cursor-pointer',
      }}
      options={countries}
      unstyled={true}
      placeholder={placeholder}
      // components={{ DropdownIndicator }}
      components={{ DropdownIndicator, Menu: AnimatedMenu }}
      defaultValue={choice || countries[0]}
      name={name}
      instanceId={useId()}
      onChange={(newValue: SingleValue<unknown>) => {
        const option = newValue as SelectT;
        onChangeProps(option.value);
      }}
    />
  );
};

export default SelectCountry;
