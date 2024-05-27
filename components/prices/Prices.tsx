"use client";
import { useState } from "react";
import { useAppSelector } from "@/store/hook";
import { Service } from "@/store/type";
import Price from "./Price";
import ServiceForPrice from "./ServiceForPrice";

const Prices = () => {
  const servicePrices: Service[] = useAppSelector(state => state.service.listService);
  const [currentChoice, setCurrentChoice] = useState<number>(0);

  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 relative pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[50px]">
        <div className="with-circle">
            <h2 className="font-bold text-center sm:text-nowrap md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[54px]">Ціни</h2>
            <p className="mb-[60px]">
              Нижче наведено прайс з цінами на наші послуги.
              <br />
              Точніше Вас зорієнтує наш адміністратор після того, як ви залишите
              заявку.
            </p>
        </div>
        <div className="flex">
          <ul>
            <ServiceForPrice 
              servicePrices={servicePrices}
              onClick={setCurrentChoice}
              currentChoice={currentChoice}
            />
          </ul>
          <div>
            <Price 
              servicePrices={servicePrices}
              currentChoice={currentChoice}
            />
          </div>
        </div>
    </section>
  );
}

export default Prices;
