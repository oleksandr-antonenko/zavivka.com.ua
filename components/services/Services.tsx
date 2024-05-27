import ServiceCard from "./ServiceCard";
import { services } from "./constants";

const Services = () => {
  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[100px]">
      <div className="relative">
        <div className="circle-grey top-0 right-0 circle-right"></div>
        <div className="with-circle">
            <h2 className="font-bold text-center md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[54px]">
              Все для кучерявих і тих,
              <br />
              хто хоче ними стати
            </h2>
            <p className="text-center md:text-start mb-[60px] md:mb-20">Пропонуємо лише ті послуги, в яких ми найкращі</p>
          <div className="grid grid-cols-2 gap-5">
              <ServiceCard services={services}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
