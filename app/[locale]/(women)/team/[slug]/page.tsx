import dynamic from 'next/dynamic';
import { FAQ } from '@/components/faq';
import DynamicTeamContainer from '@/components/team/dynamic-team-page/dynamic-team-container';
import { Contacts } from '@/components/contacts';
const ConsultationContainer = dynamic(
  () => import('@/components/consultation/consultation-container'),
  {
    ssr: false,
  },
);

const DynamicTeamPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <>
      <section className="pt-[60px] xl:pt-[150px]">
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
