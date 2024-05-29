"use client";
import Review from "@/components/reviews/Review";
import { useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";


const Reviews = () => {
  const reviews = useAppSelector(state => state.feedbacks.listFeedback);
  const [current, setCurrent] = useState<number>(0);
  const carouselScroll = () => {
    if(current === reviews.length - 1){
      return setCurrent(0)
    }
    return setCurrent(current + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselScroll()}, 3000);
    return () => clearInterval(interval);
  })

  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 relative pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[100px]">
      <div className="relative">
        <div className="circle-grey circle-middle circle-up-right right-0 top-0"></div>
        <div className="circle-grey circle-small circle-left left-0 top-0"></div>
        <h2 className="font-bold text-center sm:text-nowrap md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[54px]">Відгуки наших клієнтів</h2>
        <p className="mb-20 text-center sm:text-nowrap md:text-start">Чесне слово, писали не самі</p>
        <div className="flex gap-5 overflow-hidden">
          <Review 
            reviews={reviews}
            current={current}
            onclick={setCurrent}
          />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
