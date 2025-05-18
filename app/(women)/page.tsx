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
      <ModernServices />
      <SkilsContainer />
      <Zavivka />
      <ProfessionalFamilyContainer />
      <ConsultationContainer />
      <ModernTrustContainer />
      <Prices />
      <Reviews />
      <Booking />
      <FAQ />
      <Contacts />
      <IntervalPopUp />
    </>
  );
}
