import ConsultationContainer from '@/components/consultation/consultation-container';
import { Contacts } from '@/components/contacts';
import { FAQ } from '@/components/faq';
import TeamForMenInfo from '@/components/FOR-MEN/team-for-men/team-fom-men-info';
import { getLocale } from 'next-intl/server';
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonical = `${baseUrl}/${locale}/cholovicha-zavivka/team-men`;

  return {
    title: 'Майстри чоловічої завивки волосся у Києві',
    description:
      'Дізнайтесь більше про наших майстрів, які спеціалізуються на чоловічій завивці волосся. Професіонали з досвідом, індивідуальний підхід та стильний результат.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Команда експертів з чоловічої завивки волосся | Київ, Хрещатик',
      description:
        'Познайомтесь з нашими майстрами з чоловічої завивки: сучасні техніки, стильні образи та комфортна атмосфера в центрі Києва.',
      url: canonical,
      images: [
        {
          url: `${baseUrl}/masterOpenGraph.webp`,
          width: 1200,
          height: 630,
          alt: 'Майстри чоловічої завивки волосся у Києві',
        },
      ],
      type: 'article',
    },
  };
}

const TeamMenPage = () => {
  return (
    <>
      <h1 className="sr-only">Майстри чоловічої завивки волосся у Києві</h1>
      <TeamForMenInfo />
      <section className="sm:pb-[60px] xl:pb-[150px]">
        <ConsultationContainer />
      </section>
      <section className="pb-[60px] md:pb-[150px]">
        <FAQ />
      </section>
      <Contacts />
    </>
  );
};

export default TeamMenPage;
