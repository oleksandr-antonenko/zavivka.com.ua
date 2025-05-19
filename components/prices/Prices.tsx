'use client';
import { useState } from 'react';
import { useAppSelector } from '@/store/hook';
import { Service } from '@/store/type';
import Price from './Price';
import ServiceForPrice from './ServiceForPrice';
import Image from 'next/image';

const Prices = ({
  forMen = false,
  haircut = false,
}: {
  forMen?: boolean;
  haircut?: boolean;
}) => {
  const servicePricesInfo: Service[] = useAppSelector(
    (state) => state.service.listService,
  );
  const menSer = [
    servicePricesInfo.find((i) => i.id === '01')!,
    servicePricesInfo.find((i) => i.id === '03')!,
    servicePricesInfo.find((i) => i.id === '04')!,
    servicePricesInfo.find((i) => i.id === '07')!,
    servicePricesInfo.find((i) => i.id === '08')!,
  ];
  const menHaircutSer = [
    servicePricesInfo.find((i) => i.id === '03')!,
    servicePricesInfo.find((i) => i.id === '04')!,
    servicePricesInfo.find((i) => i.id === '07')!,
    servicePricesInfo.find((i) => i.id === '08')!,
  ];
  const haircutSer = [
    servicePricesInfo.find((i) => i.id === '03')!,
    servicePricesInfo.find((i) => i.id === '04')!,
    servicePricesInfo.find((i) => i.id === '05')!,
    servicePricesInfo.find((i) => i.id === '06')!,
    servicePricesInfo.find((i) => i.id === '07')!,
    servicePricesInfo.find((i) => i.id === '08')!,
  ];
  const servicePrices =
    !forMen && !haircut
      ? servicePricesInfo
      : (!haircut && forMen) || (haircut && forMen)
        ? menHaircutSer
        : haircutSer;
  const [currentChoice, setCurrentChoice] = useState<number>(0);

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <div className="with-circle">
        <div
          className={`relative mb-[20px] max-w-[150px] md:max-w-[250px] mx-auto md:mx-0`}
        >
          <Image
            src="/decor-title.svg"
            alt="decor title image"
            width={10}
            height={10}
            className={`absolute top-[0px] left-[-5px] xl:left-[-85px] w-[95px] h-[40px] md:w-[191px] md:h-[81px] z-[-1]`}
          />
          <h2
            className={`font-bold text-center md:text-start text-[24px] md:text-[40px] uppercase`}
          >
            Ціни
          </h2>
        </div>
        <p className="hidden md:block mb-[60px] text-[24px]">
          Нижче наведено прайс з цінами на наші послуги.
          <br />
          Точніше Вас зорієнтує наш адміністратор після того, як ви залишите
          заявку.
        </p>
        <p className="text-[16px] mb-[40px] text-[#fbfbfb] text-center md:hidden">
          Ціни уточнить адміністратор після заявки
        </p>
      </div>
      <div className="md:flex">
        <ServiceForPrice
          servicePrices={servicePrices}
          onClick={setCurrentChoice}
          currentChoice={currentChoice}
          haircut={haircut}
        />
        <div className="hidden lg:flex md:flex-1 md:w-full">
          <Price
            servicePrices={servicePrices}
            currentChoice={currentChoice}
            forMen={forMen}
            haircut={haircut}
          />
        </div>
      </div>
    </section>
  );
};

export default Prices;
