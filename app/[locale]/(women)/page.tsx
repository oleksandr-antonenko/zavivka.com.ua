import { MainBanner } from '@/components/banner';
import { Reviews } from '@/components/reviews';
import { FAQ } from '@/components/faq';
import { Contacts } from '@/components/contacts';
import { Booking } from '@/components/booking';
import { Prices } from '@/components/prices';
import { Zavivka } from '@/components/zavivka';
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

export async function generateMetadata() {
  const baseUrl = 'https://zavivka.vercel.app/'; //заменить на актувльный домен

  return {
    title: 'Професійна завивка волосся у Києві',
    description:
      'Жіноча та чоловіча завивка, карвінг, лікування кучерів, стрижка кучерявого волосся. Досвід, дбайливий підхід, консультація, укладання та підбір засобів догляду.',
    alternates: {
      canonical: baseUrl,
      languages: {
        uk: `${baseUrl}uk/`,
        en: `${baseUrl}en/`,
      },
    },
    openGraph: {
      title: 'Завивка волосся у Києві – Жіноча та чоловіча завивка',
      description:
        'Салон на Хрещатику: завивка, карвінг, стрижка та лікування кучерявого волосся. Індивідуальний підхід, дбайливість і досвід.',
      url: baseUrl,
      images: [
        {
          url: `https://zavivka.vercel.app/openGraph.webp`, // замени на путь к своему изображению
          width: 1200,
          height: 630,
          alt: 'Завивка волосся у Києві – салон на Хрещатику',
        },
      ],
      type: 'website',
    },
  };
}

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
      <section className="py-[60px] md:py-[150px]">
        <FAQ />
      </section>
      <Contacts />
    </>
  );
}
