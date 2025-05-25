import SkillsList from './skills-list';
import DecoratedTitle from '../ui/decorated-title/decorated-title';

const SkilsContainer = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <div className="circle-grey top-0 right-[-50px] circle-right md:hidden"></div>
      <DecoratedTitle className="max-w-[361px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
        Майстерність, <br /> що говорить за себе
      </DecoratedTitle>
      <p className="text-[16px] md:text-[24px] text-white text-center md:text-start mb-[40px]">
        Причини зробити завивку саме у нас
      </p>
      <SkillsList />
      <div className="circle-grey bottom-[-30%] left-[-700px]"></div>
    </section>
  );
};

export default SkilsContainer;
