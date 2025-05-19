import { MainBanner } from '@/components/banner';
import { Reviews } from '@/components/reviews';
import { FAQ } from '@/components/faq';
import { Contacts } from '@/components/contacts';
import { Booking } from '@/components/booking';
import { Prices } from '@/components/prices';
import { Zavivka } from '@/components/zavivka';
import { IntervalPopUp } from '@/components/pop-up';
import ModernServices from '@/components/services/modern-services';
import SkilsContainer from '@/components/skills/skils-container';
import ProfessionalFamilyContainer from '@/components/professional-family/professional-family-container';
import ModernTrustContainer from '@/components/trust/modern-trust/modern-trust-container';
import dynamic from 'next/dynamic';
const ConsultationContainer = dynamic(
  () => import('@/components/consultation/consultation-container'),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <MainBanner />
      <section className="py-[60px] xl:py-[150px] ">
        <ModernServices />
      </section>
      <section className="pb-[60px] xl:pb-[150px] ">
        <SkilsContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Zavivka />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <ProfessionalFamilyContainer />
      </section>
      <section className="sm:pb-[60px] xl:pb-[150px]">
        <ConsultationContainer />
      </section>
      <ModernTrustContainer />
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Reviews />
      </section>
      <Booking />
      <section className="p-[60px] md:py-[150px]">
        <FAQ />
      </section>
      <Contacts />
      <IntervalPopUp />
    </>
  );
}
