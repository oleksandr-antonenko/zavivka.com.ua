import { Booking } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import BeforeAfterGallery from '@/components/GALLERY/BeforeAfter/BeforeAfterGallery';
import SocialMasters from '@/components/GALLERY/social-masters/SocialMasters';
import TrustGalleryContainer from '@/components/GALLERY/trust-gallery/trust-gallery-container';
import OrderBlock from '@/components/team/components/OrderBlock';
import { getLocale } from 'next-intl/server';

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonical = `${baseUrl}/${locale}/gallery`;

  return {
    title: 'Галерея робіт салону Zavivka – результати наших майстрів',
    description:
      'Подивіться на результати роботи наших майстрів. Галерея "до та після" показує реальні трансформації наших клієнтів. Стильні стрижки, фарбування та укладки.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Галерея робіт салону Zavivka | Результати наших майстрів',
      description:
        'Реальні результати роботи наших майстрів. Галерея "до та після" показує трансформації наших клієнтів. Стильні стрижки, фарбування та укладки.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/galleryOpenGraph.webp`,
          width: 1200,
          height: 630,
          alt: 'Галерея робіт салону Zavivka – результати наших майстрів',
        },
      ],
      type: 'website',
    },
  };
}

const GalleryPage = () => {
  return (
    <>
      <h1 className="sr-only">
        Галерея робіт салону Zavivka – результати наших майстрів
      </h1>
      <BeforeAfterGallery />
      <section className="py-[60px] xl:py-[100px]">
        <SocialMasters />
      </section>
      <section className="pb-[60px] xl:pb-[100px]">
        <TrustGalleryContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px] relative w-full max-w-[1200px] mx-auto px-2">
        <OrderBlock />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking />
      </section>
      <Contacts />
    </>
  );
};

export default GalleryPage;
