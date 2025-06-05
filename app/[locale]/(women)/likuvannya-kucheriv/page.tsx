import { Booking } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import { Prices } from '@/components/prices';
import SignalListContainer from '@/components/THERAPY/therapy-signa-list/signal-list-container';
import TherapySliderWrapper from '@/components/THERAPY/therapy-slider/therapy-slider-container';
import { getLocale } from 'next-intl/server';
import BannerForAllPages from '@/components/banner/banner-for-all-pages';

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = 'https://zavivka.vercel.app';
  const canonical = `${baseUrl}/${locale}/likuvannya-kucheriv`;

  return {
    title: 'Лікування кучерів – Київ, індивідуальний підхід',
    description:
      'Професійне лікування кучерів у Києві: зволоження, живлення, захист від ламкості. Ідеальне рішення після фарбування, спеки чи стайлінгу.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Лікування кучерявого волосся у Києві – салон на Хрещатику',
      description:
        'Кучері стали сухими або ламкими? Наш салон пропонує ефективні процедури для зволоження і зміцнення волосся. Індивідуальний підхід до кожного типу кучерів.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/likuvanyaOpenGraph.webp`,
          width: 1200,
          height: 630,
          alt: 'Лікування кучерявого волосся у Києві – салон на Хрещатику',
        },
      ],
      type: 'article',
    },
  };
}

const TherapyPage = () => {
  return (
    <div>
      <BannerForAllPages
        title="Лікування кучерів в Києві"
        description="Процедура відновлення, яка пухнасті і некеровані локони знову зробить м'яким, пружними та слухняними.Результат побачите одразу, ефект до 3-х місяців."
        buttonText="Онлайн запис"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
        isTherapy={true}
      />
      <section className="py-[60px] xl:py-[150px]">
        <SignalListContainer />
      </section>
      <section>
        <TherapySliderWrapper />
      </section>
      <section className="py-[60px] xl:py-[150px]">
        <Prices isTherapy={true} />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking />
      </section>
      <Contacts />
    </div>
  );
};

export default TherapyPage;
