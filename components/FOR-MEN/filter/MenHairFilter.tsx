'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { photosForMen } from './photo-men-data';
import { CurlSize, HairLength } from '@/components/zavivka/types';
import { DesktopFilter } from '@/components/zavivka/DesktopFilter';
import { MobileFilter } from '@/components/zavivka/MobileFilter';
import Carousel from '@/components/zavivka/Carousel';

export const MenHairFilter = () => {
  const [selectedLength, setSelectedLength] = useState<HairLength>('Всі');
  const [selectedCurl, setSelectedCurl] = useState<CurlSize>('Всі');

  const filteredPhotos = photosForMen.filter((photo) => {
    const lengthCondition =
      selectedLength === 'Всі' || photo.hairLength === selectedLength;

    const curlCondition =
      selectedCurl === 'Всі' || photo.curlSize === selectedCurl;

    return lengthCondition && curlCondition;
  });

  const lengthOptions = ['Коротке', 'По плечі', 'Всі'];

  const curlOptions = ['Інтенсивний', 'Середній', 'Великий', 'Всі'];

  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-2">
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
                setOption={
                  setSelectedLength as Dispatch<SetStateAction<string>>
                }
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
          </div>
        </div>

        <Carousel filteredPhotos={filteredPhotos} />
      </div>
    </div>
  );
};
