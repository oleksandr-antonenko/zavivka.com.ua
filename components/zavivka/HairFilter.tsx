'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { photos } from '@/components/zavivka/photos';
import { Colored, CurlSize, HairLength } from '@/components/zavivka/types';
import { DesktopFilter } from '@/components/zavivka/DesktopFilter';
import { MobileFilter } from '@/components/zavivka/MobileFilter';
import Carousel from '@/components/zavivka/Carousel';

export const HairFilter = () => {
  const [selectedLength, setSelectedLength] = useState<HairLength>('Всі');
  const [selectedCurl, setSelectedCurl] = useState<CurlSize>('Всі');
  const [isColored, setIsColored] = useState<Colored>('Всі');

  const filteredPhotos = photos.filter((photo) => {
    const lengthCondition =
      selectedLength === 'Всі' || photo.hairLength === selectedLength;

    const curlCondition =
      selectedCurl === 'Всі' || photo.curlSize === selectedCurl;
    let colorCondition;
    if (isColored === 'Всі') {
      colorCondition = true; // Accept all colored statuses
    } else if (isColored === 'Фарбоване') {
      colorCondition = photo.colored === true;
    } else {
      colorCondition = photo.colored === false;
    }

    // Return true only if all conditions are met
    return lengthCondition && curlCondition && colorCondition;
  });

  const lengthOptions = [
    'Короткі',
    'По плечі',
    'По лопатки',
    'За лопатки',
    'По пояс',
    'Всі',
  ];
  const curlOptions = [
    'Інтенсивний',
    'Середній',
    'Великий',
    'Пляжна Хвиля',
    'Карвінг',
    'Всі',
  ];
  const coloredOptions = ['Фарбоване', 'Натуральне', 'Всі'];

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center text-white px-2">
      {/* Filters */}
      <div className="w-full md:w-1/5">
        {/* Mobile select inputs */}
        <div className="flex mb-[45px] gap-2 md:hidden">
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
            title={'Тип'}
          />

          <MobileFilter
            options={curlOptions}
            selectedValue={selectedCurl}
            setOption={setSelectedCurl as Dispatch<SetStateAction<string>>}
            title={'Завиток'}
          />
        </div>

        {/*Desktop buttons */}
        <div className="hidden md:flex md:flex-col md:gap-[36px]">
          <div>
            <DesktopFilter
              options={lengthOptions}
              setOption={setSelectedLength as Dispatch<SetStateAction<string>>}
              title="Довжина волосся"
              selectedValue={selectedLength}
            />
          </div>
          <div>
            <DesktopFilter
              options={curlOptions}
              setOption={setSelectedCurl as Dispatch<SetStateAction<string>>}
              title="Розмір завитка"
              selectedValue={selectedCurl}
            />
          </div>
          <div>
            <DesktopFilter
              options={coloredOptions}
              setOption={setIsColored as Dispatch<SetStateAction<string>>}
              title={'Тип'}
              selectedValue={isColored}
            />
          </div>
        </div>
      </div>

      <Carousel filteredPhotos={filteredPhotos} />
    </div>
  );
};
