import { services } from './services-data';
import ModernServiceCard from './modern-services-card';
import DecoratedTitle from '../ui/decorated-title/decorated-title';

const ModernServices = () => {
  return (
    <section className="py-[60px] px-2 xl:py-[150px] mx-auto w-full max-w-[1200px]">
      <div className="relative">
        <div className="circle-grey top-0 right-0 circle-right blur-[50px]"></div>
        <div>
          <DecoratedTitle className="max-w-[361px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
            Все для кучерявих і тих,
            <br />
            хто хоче ними стати
          </DecoratedTitle>
          <p className="text-[16px] md:text-[24px] text-[#fbfbfb] text-center md:text-start mb-[60px] md:mb-20">
            Пропонуємо лише ті послуги, в яких ми найкращі
          </p>
          <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-4 gap-5 h-[500px]">
            <ModernServiceCard services={services} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
