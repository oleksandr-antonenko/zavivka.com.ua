"use client";
import Image from 'next/image';
import { SelectProps, SelectT } from './types';
import React, {useId} from 'react';
import type {FC} from 'react';
import Select, {components, DropdownIndicatorProps} from 'react-select';
import type { SingleValue } from 'react-select';
import arrow from './img/arrow-white.png';

const SelectCountry: FC<SelectProps> = ({countries, name, onChangeProps}) => {
  
  const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
    
    return (
    <components.DropdownIndicator {...props}>
        <Image src={arrow} alt="arrow" width={0} height={0} className='ml-2 cursor-pointer w-2 h-2'/>
    </components.DropdownIndicator>
  )};
  return (
    <Select  
      classNames={{
        control: () =>
          'bg-transparent border-0 focus:border-0 focus:outline-none mr-5',
        option: () => 
          'text-grey-light bg-common-background mb-[7px] rounded',
        indicatorSeparator: () =>
          'hidden',
        dropdownIndicator: (state) =>
          state.selectProps.menuIsOpen ? 'rotate-180 transition-all ease-in-out delay-150 ml-2 cursor-pointer' : ''
      }}
      options={countries}
      unstyled={true}
      placeholder={false}
      components={{DropdownIndicator}}
      defaultValue={countries[0]}
      name={name}
      instanceId={useId()}
      // captureMenuScroll={false}
      onChange={(newValue: SingleValue<unknown>) =>{ 
        const option = newValue as SelectT;
        onChangeProps(option.value)}}
    />
  )
}

export default SelectCountry;
