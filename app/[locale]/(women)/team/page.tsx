import { Contacts } from '@/components/contacts';
import { FAQ } from '@/components/faq';
import { TeamInfo } from '@/components/team';
import dynamic from 'next/dynamic';
const ConsultationContainer = dynamic(
  () => import('@/components/consultation/consultation-container'),
  {
    ssr: false,
  },
);

export async function generateMetadata() {
  const baseUrl = 'https://zavivka.vercel.app/team'; // замените на актуальный продакшн-домен

  return {
    title: 'Наші майстри завивки волосся | Завивка Київ',
    description:
      'Познайомтесь з командою експертів: професійні майстри жіночої та чоловічої завивки, карвінгу, лікування та догляду за кучерявим волоссям у Києві.',
    alternates: {
      canonical: baseUrl,
      languages: {
        uk: `${baseUrl}/uk/`,
        en: `${baseUrl}/en/`,
      },
    },
    openGraph: {
      title: 'Команда майстрів з завивки волосся | Київ, Хрещатик',
      description:
        'Досвідчені спеціалісти з жіночої та чоловічої завивки, карвінгу, лікування кучерів та стрижки. Професіоналізм, індивідуальний підхід і турбота.',
      url: baseUrl,
      images: [
        {
          url: `/openGrapgTeam.webp`, // добавь своё изображение для OG этой страницы
          width: 1200,
          height: 630,
          alt: 'Команда майстрів з завивки волосся у Києві',
        },
      ],
      type: 'profile',
    },
  };
}

export default function Team() {
  return (
    <>
      <TeamInfo />
      <section className="sm:pb-[60px] xl:pb-[150px]">
        <ConsultationContainer />
      </section>
      <section className="pb-[60px] md:pb-[150px]">
        <FAQ />
      </section>
      <Contacts />
    </>
  );
}
