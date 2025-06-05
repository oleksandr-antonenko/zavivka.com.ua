import { Contacts } from '@/components/contacts';
import { Booking, servicesForCheckboxMen } from '@/components/booking';
import { Prices } from '@/components/prices';
import ReasonsContainer from '@/components/FOR-MEN/reasons/reasons-container';
import { MenHairFilter } from '@/components/FOR-MEN/filter/MenHairFilter';
import { getLocale } from 'next-intl/server';
import BannerForAllPages from '@/components/banner/banner-for-all-pages';

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = 'https://zavivka.vercel.app';
  const canonical = `${baseUrl}/${locale}/cholovicha-zavivka`;

  return {
    title: 'Завивка для чоловіків – Київ, салон на Хрещатику',
    description:
      'Професійна чоловіча завивка у Києві. Природні локони, дбайливий підхід, індивідуальна консультація.Ідеально для стильного образу. Індивідуальний підбір техніки, консультація та догляд.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Чоловіча завивка у Києві – Салон на Хрещатику',
      description:
        'Завивка для чоловіків у центрі Києва: натуральний вигляд, індивідуальний підхід, повна консультація та догляд. Ідеально для стильного образу. Індивідуальний підбір техніки, консультація та догляд.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/menOpenGraph.webp`,
          width: 1200,
          height: 630,
          alt: 'Чоловіча завивка у Києві – салон на Хрещатику',
        },
      ],
      type: 'article',
    },
  };
}

const ZavivkaPage = () => {
  return (
    <div>
      <BannerForAllPages
        title="Чоловіча завивка волосся в Києві"
        buttonText="Запис на консультацію"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
      />
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
