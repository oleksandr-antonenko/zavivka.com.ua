import { Booking } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import PlyazhnaKhvyliaSliderSliderContainer from '@/components/PLYAZHNA-KHVYLIA/plyazhna-khvylia-slider/plyazhna-khvilya-slider-container';
import PlyazhnaKhvyliaListContainer from '@/components/PLYAZHNA-KHVYLIA/plyazhna-khvylia-wrapper/plyazhna-khvylia-container';
import { Prices } from '@/components/prices';
import ModernTrustContainer from '@/components/trust/modern-trust/modern-trust-container';
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
  const canonical = `${baseUrl}/${locale}/plyazhna-khvylia`;

  return {
    title: 'Пляжна хвиля у Києві – природні локони без зусиль',
    description:
      'Пляжна хвиля (Beach Waves) – легка завивка, яка створює ефект недбалої текстури. Ідеальний варіант для тих, хто мріє про обʼєм і рух волосся без щоденного стайлінгу.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Пляжна хвиля у Києві | Локони, як після відпустки',
      description:
        'Салон на Хрещатику пропонує послугу “Пляжна хвиля” – мʼяка завивка, яка виглядає максимально природно. Універсальний образ для будь-якої довжини волосся.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/plyazhnaOpenGraph.webp`,
          width: 1200,
          height: 630,
          alt: 'Пляжна хвиля у Києві – салон на Хрещатику',
        },
      ],
      type: 'article',
    },
  };
}

const PlyazhnaKhvyliaPage = () => {
  return (
    <>
      <BannerForAllPages
        title="Пляжна хвиля в Києві"
        description="Пляжна хвиля|Пляжні локони|Beach Waves — найпопулярніша та універсальна завивка, яка личить усім та і гарно виглядатиме на будь-якій довжині волосся."
        buttonText="Запис на консультацію"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
      />
      <section className="py-[60px] xl:py-[150px]">
        <PlyazhnaKhvyliaListContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <PlyazhnaKhvyliaSliderSliderContainer />
      </section>
      <section>
        <ModernTrustContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices isPlyazhna={true} />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking />
      </section>
      <Contacts />
    </>
  );
};

export default PlyazhnaKhvyliaPage;
