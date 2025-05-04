"use client";
import React, { useState } from "react";
import Choice from "./Choice";
import Photo from "./Photo";
import { useAppSelector } from "@/store/hook";
import { Service } from "@/store/type";
import { HairFilter } from "./HairFilter";

const Zavivka = () => {
  const serviceImages: Service = useAppSelector(
    (state) => state.service.listService.find((item) => item.id === "01")!,
  );
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const [currentCurl, setCurrentCurl] = useState<number>(0);
  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 relative pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[100px]">
      <h2 className="font-bold text-center sm:text-nowrap md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[54px]">
        Варіанти завивки
      </h2>
      {/*<div className="flex">*/}
      {/*<Choice */}
      {/* serviceImages={serviceImages}*/}
      {/* currentHeight={currentHeight}*/}
      {/* currentCurl={currentCurl}*/}
      {/* onClickHeight={setCurrentHeight}*/}
      {/* onClickCurl={setCurrentCurl}*/}
      {/* />*/}
      {/*<Photo */}
      {/* serviceImages={serviceImages}*/}
      {/* currentHeight={currentHeight}*/}
      {/* currentCurl={currentCurl}*/}
      {/* />*/}
      <HairFilter />
      {/*</div>*/}
    </section>
  );
};

export default Zavivka;
