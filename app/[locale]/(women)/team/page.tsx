import { Contacts } from '@/components/contacts';
import { FAQ } from '@/components/faq';
import { TeamInfo } from '@/components/team';
import { getLocale } from 'next-intl/server';
import ConsultationContainer from '@/components/consultation/consultation-container';
import Script from 'next/script';
import { masters } from '@/lib/masters';

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = 'https://zavivka.vercel.app';
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
      <Script
        id="team-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: masters.map((master, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Person',
                name: master.name,
                jobTitle: master.category,
                worksFor: {
                  '@type': 'Organization',
                  name: 'Zavivka Studio',
                },
                description: `${master.name} — ${master.category} з досвідом ${master.experience}`,
                image: master.photo,
                url: `https://zavivka.vercel.app/uk/team/${master.slug}`,
              },
            })),
          }),
        }}
      />
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
