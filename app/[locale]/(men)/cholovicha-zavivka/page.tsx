import { MainBanner } from '@/components/banner';
import { Contacts } from '@/components/contacts';
import { Booking, servicesForCheckboxMen } from '@/components/booking';
import { Prices } from '@/components/prices';
import ReasonsContainer from '@/components/FOR-MEN/reasons/reasons-container';
import { MenHairFilter } from '@/components/FOR-MEN/filter/MenHairFilter';

const ZavivkaPage = () => {
  return (
    <div>
      <MainBanner forMen />
      <section className="py-[60px] xl:py-[150px]">
        <ReasonsContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <MenHairFilter />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices forMen />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking forMen servicesForCheckbox={servicesForCheckboxMen} />
      </section>
      <Contacts />
    </div>
  );
};

export default ZavivkaPage;
