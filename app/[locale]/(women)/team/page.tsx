import { Contacts } from '@/components/contacts';
import { FAQ } from '@/components/faq';
import { TeamInfo } from '@/components/team';
import { getLocale } from 'next-intl/server';
import ConsultationContainer from '@/components/consultation/consultation-container';

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = 'https://zavivka.com.ua';
  const canonical = `${baseUrl}/${locale}/team`;

  return {
    title: 'Наші майстри завивки волосся',
    description:
      'Познайомтесь з командою експертів: професійні майстри жіночої та чоловічої завивки, карвінгу, лікування та догляду за кучерявим волоссям у Києві.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Команда майстрів з завивки волосся | Київ, Хрещатик',
      description:
        'Досвідчені спеціалісти з жіночої та чоловічої завивки, карвінгу, лікування кучерів та стрижки. Професіоналізм, індивідуальний підхід і турбота.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/masterOpenGraph.webp`, // добавь своё изображение для OG этой страницы
          width: 800,
          height: 600,
          alt: 'Команда майстрів з завивки волосся у Києві',
        },
      ],
      type: 'website',
    },
  };
}

export default function TeamPage() {
  return (
    <>
      <h1 className="sr-only">Наші майстри завивки волосся у Києві</h1>
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
