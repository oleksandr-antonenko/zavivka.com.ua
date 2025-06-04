'use client';
import { useAppSelector } from '@/store/hook';
import MemberFullInfo from '@/components/team/MemberFullInfo';

const DynamicTeamForMenContainer = ({ slug }: { slug: string }) => {
  const teamMembers = useAppSelector((state) => state.team.listOfTeam);
  const menMasters = teamMembers.filter((member) => member.isMen);
  const team = menMasters.find((member) => member.slug === slug) || null;
  return (
    <>
      <section className="relative w-full max-w-[1200px] mx-auto px-2">
        <MemberFullInfo member={team} forMen={true} />
      </section>
    </>
  );
};

export default DynamicTeamForMenContainer;
