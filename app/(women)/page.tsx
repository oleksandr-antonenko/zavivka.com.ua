import { Features } from '@/components/feature';
import { MainBanner } from '@/components/banner';
import { Trust } from '@/components/trust';
import { Digits } from '@/components/digits';
import { Reviews } from '@/components/reviews';
import { Services } from '@/components/services';
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

export default function Home() {
  return (
    <>
      <MainBanner />
      <ModernServices />
      {/* <Services /> */}
      {/* <Features /> */}
      <SkilsContainer />
      <Zavivka />
      <ProfessionalFamilyContainer />
      {/* <Digits /> */}
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
