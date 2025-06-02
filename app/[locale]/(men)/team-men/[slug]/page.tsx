import ConsultationContainer from '@/components/consultation/consultation-container';
import { Contacts } from '@/components/contacts';
import { FAQ } from '@/components/faq';
import DynamicTeamForMenContainer from '@/components/FOR-MEN/dynamicPageTeamForMen/dynamic-team-for-men-container';
import { masters } from '@/lib/masters';

const DynamicTeamForMenPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const master = masters.find((m) => m.slug === params.slug);
  return (
    <>
      <h1 className="sr-only">{`Сторінка майстра ${master?.name || 'Інформація про цього майстра відсутня.'}`}</h1>
      <section className="pt-[60px] xl:pt-[150px]">
        <DynamicTeamForMenContainer slug={slug} />
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

export default DynamicTeamForMenPage;
