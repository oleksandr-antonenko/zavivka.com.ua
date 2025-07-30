import { Booking } from "@/components/booking";
import AdvantagesSliderContainer from "@/components/CARVING/advantages-slider/advatages-slider-container";
import AdvantagesListContainer from "@/components/CARVING/advantages/advantages-container";
import { Contacts } from "@/components/contacts";
import { Prices } from "@/components/prices";
import ModernTrustContainer from "@/components/trust/modern-trust/modern-trust-container";
import { getLocale } from "next-intl/server";
import BannerForAllPages from "@/components/banner/banner-for-all-pages";

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonical = `${baseUrl}/${locale}/carving`;

  return {
    title: "Карвінг у Києві – довготривала укладка з обʼємом",
    description:
      "Карвінг – ідеальний варіант для створення природних локонів без щоденної укладки. Довготривалий ефект, легкість у догляді та збереження здоровʼя волосся.",
    alternates: {
      canonical,
    },
    openGraph: {
      title: "Карвінг волосся у Києві | Локони з обʼємом на довго",
      description:
        "Салон на Хрещатику пропонує карвінг волосся – мʼяку та делікатну хімічну укладку. Обʼєм, текстура та зручність – без шкоди для волосся.",
      url: canonical,
      images: [
        {
          url: `${baseUrl}/carvingOpenGraph.webp`, // убедись, что этот файл существует и подходит по смыслу
          width: 1200,
          height: 630,
          alt: "Карвінг волосся у Києві – салон на Хрещатику",
        },
      ],
      type: "article",
    },
  };
}

const CarvingPage = () => {
  return (
    <>
      <BannerForAllPages
        title="Карвінг волосся в Києві"
        description="Карвінг точно стане вашою улюбленою укладкою, якщо ви обожнюєте об'ємні, хаотичні локони"
        buttonText="Запис на консультацію"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
      />
      <section className="py-[60px] xl:py-[150px]">
        <AdvantagesListContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <AdvantagesSliderContainer />
      </section>
      <section>
        <ModernTrustContainer />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices isCarving={true} />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking />
      </section>
      <section className="py-[60px] md:py-[150px]">
        <Contacts />
      </section>
    </>
  );
};

export default CarvingPage;
