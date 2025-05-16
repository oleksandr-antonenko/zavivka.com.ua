'use client';
import React from 'react';
import { HairFilter } from './HairFilter';
import DecoratedTitle from '../ui/decorated-title/decorated-title';

const Zavivka = () => {
  return (
    <section className="relative pb-[60px] xl:pb-[150px] w-full max-w-[1200px] mx-auto px-2">
      <div className="circle-grey top-0 right-0 circle-right blur-[50px]"></div>
      <DecoratedTitle className="max-w-[200px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
        Варіанти <br /> завивки
      </DecoratedTitle>
      <HairFilter />
    </section>
  );
};

export default Zavivka;
