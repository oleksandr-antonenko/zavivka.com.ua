import { MainBanner } from '@/components/banner';
// import { Trust } from '@/components/trust';
import { Contacts } from '@/components/contacts';
import { Booking, servicesForCheckboxMen } from '@/components/booking';
import { Prices } from '@/components/prices';
import { Zavivka } from '@/components/zavivka';
import ReasonsContainer from '@/components/FOR-MEN/reasons/reasons-container';

const ZavivkaPage = () => {
  return (
    <div>
      <MainBanner forMen />
      <section className="py-[60px] xl:py-[150px]">
        <ReasonsContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Zavivka />
      </section>
      {/* <Trust forMen /> */}
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices forMen />
      </section>
      <Booking forMen servicesForCheckbox={servicesForCheckboxMen} />
      <Contacts />
    </div>
  );
};

export default ZavivkaPage;
