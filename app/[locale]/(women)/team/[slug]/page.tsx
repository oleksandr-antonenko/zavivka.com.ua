import { FAQ } from '@/components/faq';
import DynamicTeamContainer from '@/components/team/dynamic-team-page/dynamic-team-container';
import { Contacts } from '@/components/contacts';
import { getLocale } from 'next-intl/server';
import ConsultationContainer from '@/components/consultation/consultation-container';
import { Metadata } from 'next';
import { masters } from '@/lib/masters';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const locale = await getLocale();
  const baseUrl = 'https://zavivka.com.ua';
  const canonical = `${baseUrl}/${locale}/team/${params.slug}`;
  const master = masters.find((m) => m.slug === params.slug);

  if (!master) {
    return {
      title: 'Майстер не знайдений',
      description: 'Інформація про цього майстра відсутня.',
    };
  }

  return {
    title: `${master.name} – ${master.category}`,
    description: `${master.name} — професійний ${master.category} з досвідом ${master.experience}. Працює з індивідуальним підходом до кожного клієнта, гарантуючи якість та комфорт. Дізнайтесь більше про майстра та його послуги.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${master.name} – ${master.category}`,
      description: `${master.name} — ${master.category} з досвідом ${master.experience}.`,
      images: [
        {
          url: master.photo,
          width: 1200,
          height: 630,
          alt: `${master.name} – ${master.category}`,
        },
      ],
      type: 'profile',
    },
  };
}

const DynamicTeamPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const master = masters.find((m) => m.slug === params.slug);
  return (
    <>
      <h1 className="sr-only">{`Сторінка майстра ${master?.name || 'Інформація про цього майстра відсутня.'}`}</h1>
      <p className="sr-only">
        {`${master?.name || 'Інформація про цього майстра відсутня.'} — професійний ${master?.category} з досвідом роботи ${master?.experience}. Майстер працює з індивідуальним підходом, забезпечуючи якість і комфорт для кожного клієнта.`}
      </p>
      <section className="pt-[30px] xl:pt-[150px]">
        <DynamicTeamContainer slug={slug} />
      </section>
      <section className="py-[60px] md:py-[150px]">
        <ConsultationContainer />
      </section>
      <section className="pb-[60px] md:pb-[150px]">
        <FAQ />
      </section>
      <section>
        <Contacts />
      </section>
    </>
  );
};

export default DynamicTeamPage;
