import ConsultationContainer from '@/components/consultation/consultation-container';
import { Contacts } from '@/components/contacts';
import { FAQ } from '@/components/faq';
import TeamForMenInfo from '@/components/FOR-MEN/team-for-men/team-fom-men-info';

const TeamMenPage = () => {
  return (
    <>
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
