import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';
import StrizhkaAccordion from './strizhka-kucheriv-accordion';

const StrizhkaKucherivContainer = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <div className="circle-grey top-0 right-[-50px] circle-right md:hidden"></div>
      <DecoratedTitle className="max-w-[361px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
        Чому варто <br /> обрати нашу стрижку для кучерів
      </DecoratedTitle>
      <StrizhkaAccordion />
      <div className="circle-grey bottom-[-30%] left-[-700px]"></div>
    </section>
  );
};

export default StrizhkaKucherivContainer;
