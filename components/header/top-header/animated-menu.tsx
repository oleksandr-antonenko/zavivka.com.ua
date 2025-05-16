'use client'
import { MenuProps } from 'react-select';
import { FC, useEffect, useRef, useState } from 'react';
import { components } from 'react-select';

export const AnimatedMenu: FC<MenuProps> = (props) => {
  const isOpen = props.selectProps.menuIsOpen;
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timeout = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300); // Должно совпадать с Tailwind duration

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <components.Menu
      {...props}
      className={`origin-top transform bg-transparent border-x border-b border-yellow-border rounded-b-[14px] mt-0 backdrop-blur-[20px] overflow-hidden ${
        isClosing ? 'animate-slideUp' : 'animate-slideDown'
      }`}
    >
      {props.children}
    </components.Menu>
  );
};
