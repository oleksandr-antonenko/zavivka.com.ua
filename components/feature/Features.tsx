"use client";

import { Feature } from "@/components/feature/Feature";
import { useEffect, useState } from "react";
import { featuresWomen } from "./constants";
import { FeatureT } from "./type";

const Features = ({features=featuresWomen, forMen=false}: {features?: FeatureT[],forMen?: boolean}) => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselInfiniteScroll = () => {
    const featuresBox = document.querySelector('#featuresBox')!;
    const {top, bottom} = featuresBox.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    const isVisible = top < screenHeight && bottom > 0;
    const isTopAboveMiddle = top < screenHeight / 2;
    const isBottomBelowMiddle = bottom > screenHeight / 2;

   if(isVisible && isTopAboveMiddle && isBottomBelowMiddle){ if(currentIndex === features.length - 1){
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)}
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselInfiniteScroll()}, 1800);
    return () => clearInterval(interval);
  })

  return (
    <section id='featuresBox' className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5">
          <div className="with-circle">
            {!forMen ? 
            <h2 className="font-bold text-center md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[54px]">
              5 причин
              <br />
              зробити завивку у нас
            </h2> : 
            <h2 className="font-bold text-center md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[54px]">5 причин чому чоловіча завивка — <br/> це зручно, красиво та завжди актуально</h2>}
            {!forMen && <p className="text-center md:text-start mb-[94px] md:mb-20">Не варто порівнювати нас з іншими салонами, і ось чому:</p>}
          </div>
          <div className="features-container">
            <Feature 
              features={features}
              currentIndex={currentIndex}
            />
          </div>
    </section>
  );
}

export default Features;
