import { Booking } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import { Prices } from '@/components/prices';
import StrizhkaSliderContiner from '@/components/STRIZHKA-KUCHERIV/strizhka-kucheriv-slider/strizhka-slider-continer';
import StrizhkaKucherivContainer from '@/components/STRIZHKA-KUCHERIV/strizhka-kucheriv-wrapper/strizhka-kucheriv-container';
import { getLocale } from 'next-intl/server';
import BannerForAllPages from '@/components/banner/banner-for-all-pages';

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = 'https://zavivka.vercel.app';
  const canonical = `${baseUrl}/${locale}/strizhka-kucheriv`;

  return {
    title: 'Стрижка кучерявого волосся у Києві',
    description:
      'Професійна стрижка кучерявого волосся в центрі Києва. Індивідуальний підхід до кожного типу завитків, ідеальна форма та легка укладка без щоденних зусиль.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Стрижка кучерявого волосся у Києві | Салон на Хрещатику',
      description:
        'Майстри, які спеціалізуються саме на кучерях. Підбір форми, збереження текстури, комфортна атмосфера та довготривалий результат без шкоди волоссю.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/strizhkaOpenGraph.webp`, // замените на изображение, связанное с кучерявими стрижками
          width: 1200,
          height: 630,
          alt: 'Стрижка кучерявого волосся у Києві',
        },
      ],
      type: 'article',
    },
  };
}

const StrizhkaKucherivPage = () => {
  return (
    <>
      <BannerForAllPages
        title="Стрижка кучерявого волосся в Києві"
        description="Створимо ідеальну форму стрижки під ваш тип завитків та форму обличчя, яка забезпечить легку укладку та бездоганний вигляд кучерів протягом декількох місяців"
        buttonText="Записатися на стрижку"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
      />
      <section className="py-[60px] xl:py-[150px]">
        <StrizhkaKucherivContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <StrizhkaSliderContiner />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices isСurlСutting={true} />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking isСurlСutting={true} />
      </section>
      <Contacts />
    </>
  );
};

export default StrizhkaKucherivPage;
