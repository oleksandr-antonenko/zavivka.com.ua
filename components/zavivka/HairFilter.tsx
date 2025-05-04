"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { photos } from "@/components/zavivka/photos";
import { Colored, CurlSize, HairLength } from "@/components/zavivka/types";
import { DesktopFilter } from "@/components/zavivka/DesktopFilter";
import Carousel from "@/components/zavivka/Carousel";
import { MobileFilter } from "@/components/zavivka/MobileFilter";

export const HairFilter = () => {
  const [selectedLength, setSelectedLength] = useState<HairLength>("Всі");
  const [selectedCurl, setSelectedCurl] = useState<CurlSize>("Всі");
  const [isColored, setIsColored] = useState<Colored>("Всі");
  // const [selectedMaster, setSelectedMaster] = useState<string>("Петрова");

  const filteredPhotos = photos.filter((photo) => {
    const lengthCondition =
      selectedLength === "Всі" || photo.hairLength === selectedLength;

    const curlCondition =
      selectedCurl === "Всі" || photo.curlSize === selectedCurl;
    let colorCondition;
    if (isColored === "Всі") {
      colorCondition = true; // Accept all colored statuses
    } else if (isColored === "Так") {
      colorCondition = photo.colored;
    } else {
      colorCondition = !photo.colored;
    }

    // Return true only if all conditions are met
    return lengthCondition && curlCondition && colorCondition;
  });

  const lengthOptions = [
    "Короткі",
    "До плечей",
    "До лопаток",
    "За лопатки",
    "По пояс",
    "Всі",
  ];
  const curlOptions = ["Маленький", "Середній", "Крупний", "Всі"];
  const coloredOptions = ["Так", "Ні", "Всі"];

  return (
    <div className="filter_block flex flex-col md:flex-row gap-8 p-6 bg-[#2e2e2e] text-white min-h-screen">
      {/* Filters */}
      <div className="w-full md:w-1/5 md:space-y-6">
        {/* Mobile select inputs */}
        <div className="flex md:hidden space-x-4">
          <MobileFilter
            options={lengthOptions}
            setOption={setSelectedLength as Dispatch<SetStateAction<string>>}
            title="Довжина"
            selectedValue={selectedLength}
          />

          <MobileFilter
            options={coloredOptions}
            selectedValue={isColored}
            setOption={setIsColored as Dispatch<SetStateAction<string>>}
            title={"Тип"}
          />

          <MobileFilter
            options={curlOptions}
            selectedValue={selectedCurl}
            setOption={setSelectedCurl as Dispatch<SetStateAction<string>>}
            title={"Завиток"}
          />

          {/*<MobileFilter*/}
          {/*  options={["Іванова", "Петрова", "Сидорова"]}*/}
          {/*  selectedValue={selectedMaster}*/}
          {/*  setOption={setSelectedMaster as Dispatch<SetStateAction<string>>}*/}
          {/*  title={"Master"}*/}
          {/*/>*/}
        </div>

        {/*Todo: make component with title, [options] and set___ */}
        {/*Desktop buttons */}
        <div className="hidden md:block space-y-6">
          <DesktopFilter
            options={lengthOptions}
            setOption={setSelectedLength as Dispatch<SetStateAction<string>>}
            title="Довжина волосся"
            selectedValue={selectedLength}
          />
          <DesktopFilter
            options={curlOptions}
            setOption={setSelectedCurl as Dispatch<SetStateAction<string>>}
            title="Розмір завитка"
            selectedValue={selectedCurl}
          />
          <DesktopFilter
            options={coloredOptions}
            setOption={setIsColored as Dispatch<SetStateAction<string>>}
            title="Колір волосся"
            selectedValue={isColored}
          />
          {/*<DesktopFilter*/}
          {/*  options={["Іванова", "Петрова", "Сидорова"]}*/}
          {/*  setOption={setSelectedMaster as Dispatch<SetStateAction<string>>}*/}
          {/*  title="Майстер"*/}
          {/*  selectedValue={selectedMaster}*/}
          {/*/>*/}
        </div>
      </div>

      <Carousel filteredPhotos={filteredPhotos} />
    </div>
  );
};
