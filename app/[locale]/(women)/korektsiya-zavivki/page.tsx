import { Booking } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import CurlFaq from '@/components/CURL-CORRECTION/curl-faq/curl-faq';
import CurlSliderWrapper from '@/components/CURL-CORRECTION/curl-slider/curl-slider-wrapper';
import { Prices } from '@/components/prices';
import { getLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
const BannerForAllPages = dynamic(
  () => import('@/components/banner/banner-for-all-pages'),
  {
    ssr: false,
  },
);

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = 'https://zavivka.vercel.app';
  const canonical = `${baseUrl}/${locale}/korektsiya-zavivki`;

  return {
    title: 'Корекція біозавивки у Києві – поновіть обʼєм природно',
    description:
      'Професійна корекція завивки у Києві. Плавний перехід, живлення завитків по довжині, індивідуальний підхід. Поновіть обʼєм без шкоди волоссю.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Корекція біозавивки у Києві – салон на Хрещатику',
      description:
        'Корекція завивки у центрі Києва. Професійний підхід до поновлення завитків, живлення довжини, плавні переходи між відрослим волоссям і локонами.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/korektsiyOpenGraph.webp`,
          width: 1200,
          height: 630,
          alt: 'Корекція біозавивки у Києві – салон на Хрещатику',
        },
      ],
      type: 'article',
    },
  };
}

const CurlCorrectionPage = () => {
  return (
    <>
      <BannerForAllPages
        title="Корекція завивки в Києві"
        buttonText="Онлайн запис"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
        isCorrection={true}
      />
      <section className="py-[60px] xl:py-[150px]">
        <CurlFaq />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <CurlSliderWrapper />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices isCorrection={true} />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking isCorrection={true} />
      </section>
      <Contacts />
    </>
  );
};

export default CurlCorrectionPage;
