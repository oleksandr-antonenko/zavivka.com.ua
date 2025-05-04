"use client";
import Image from "next/image";
import { SelectProps, SelectT } from "./types";
import React, { useId } from "react";
import type { FC } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import type { SingleValue } from "react-select";
import arrow from "./img/arrow-white.png";

const SelectCountry: FC<SelectProps> = ({
  countries,
  name,
  onChangeProps,
  placeholder,
  choice,
}) => {
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
      classNames={{
        control: (state) =>
          state.selectProps.menuIsOpen
            ? "bg-transparent  focus:outline-none mr-1 border-[1px] border-yellow-border px-1 rounded-[8px] text-[16px] text-white backdrop-blur-xs"
            : "bg-transparent focus:outline-none mr-1 border-[1px] border-yellow-border px-1 rounded-[8px] text-[16px] text-white",
        option: () =>
          "text-grey-light bg-common-background pb-[7px] backdrop-blur-xs",
        indicatorSeparator: () => "hidden",
        dropdownIndicator: (state) =>
          state.selectProps.menuIsOpen
            ? "rotate-180 transition-all ease-in-out delay-150 cursor-pointer"
            : "",
      }}
      options={countries}
      unstyled={true}
      placeholder={placeholder}
      components={{ DropdownIndicator }}
      defaultValue={choice || countries[0]}
      name={name}
      instanceId={useId()}
      // captureMenuScroll={false}
      onChange={(newValue: SingleValue<unknown>) => {
        const option = newValue as SelectT;
        onChangeProps(option.value);
      }}
    />
  );
};

export default SelectCountry;
