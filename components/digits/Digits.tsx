const Digits = () => {
  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 relative">
      <div className="flex flex-auto flex-wrap xl:flex-nowrap gap-[50px] font-mali font-bold max-w-[1200px]">
        <div className="circle-grey circle-right top-0 right-0"></div>

        <div className="flex gap-[11px] py-1 px-6 items-center rounded-[20px] border border-grey-light">
          <p className="text-[30px] sm:text-[40px] xl:text-[54px]">22</p>
          <p className="text-[16px] xl:text-[28px] leading-[100%]">роки досвіду</p>
        </div>
        <div className="flex gap-[11px] px-6 items-center rounded-[20px] border border-grey-light">
          <p className="text-[30px] sm:text-[40px] xl:text-[54px]">200+</p>
          <p className="text-[16px] xl:text-[28px] leading-[100%]">навчаних майстрів</p>
        </div>
        <div className="flex gap-[11px] px-6 items-center rounded-[20px] border border-grey-light">
          <p className="text-[30px] sm:text-[40px] xl:text-[54px]">10000</p>
          <p className="text-[16px] xl:text-[28px] leading-[100%]">задоволених клієнтів</p>
        </div>
      </div>
    </section>
  );
}

export default Digits;
