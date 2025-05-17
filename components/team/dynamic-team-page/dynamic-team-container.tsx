'use client';
import { FAQ } from '@/components/faq';
import { Contacts } from '@/components/contacts';
import OrderBlock from '../components/OrderBlock';
import { useAppSelector } from '@/store/hook';
import MemberFullInfo from '../MemberFullInfo';

const DynamicTeamContainer = ({ slug }: { slug: string }) => {
  const teamMembers = useAppSelector((state) => state.team.listOfTeam);
  const team = teamMembers.find((member) => member.slug === slug) || null;

  return (
    <>
      <section className="relative pt-[60px] xl:pt-[150px] w-full max-w-[1400px] mx-auto px-2">
        <MemberFullInfo member={team} />
        <OrderBlock />
        <FAQ />
      </section>
      <Contacts />
    </>
  );
};

export default DynamicTeamContainer;
