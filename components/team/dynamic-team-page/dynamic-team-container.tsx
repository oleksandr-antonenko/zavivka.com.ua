'use client';
import { useAppSelector } from '@/store/hook';
import MemberFullInfo from '../MemberFullInfo';

const DynamicTeamContainer = ({ slug }: { slug: string }) => {
  const teamMembers = useAppSelector((state) => state.team.listOfTeam);
  const team = teamMembers.find((member) => member.slug === slug) || null;

  return (
    <>
      <section className="relative w-full max-w-[1200px] mx-auto px-2">
        <MemberFullInfo member={team} />
      </section>
    </>
  );
};

export default DynamicTeamContainer;
