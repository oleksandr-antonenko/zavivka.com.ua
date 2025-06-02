'use client';

import { useState } from 'react';
import { useAppSelector } from '@/store/hook';
import MemberForMen from './member-for-men';

const TeamForMenInfo = ({ forMen = false }: { forMen?: boolean }) => {
  const teamMembers = useAppSelector((state) => state.team.listOfTeam);
  const menMasters = teamMembers.filter((member) => member.isMen);

  const [fullInfo, setFullInfo] = useState<boolean>(false);
  return (
    <section className="max-w-[1440px] px-2 mx-auto pt-[50px] md:pt-[100px]">
      {!fullInfo && (
        <h1 className="font-bold text-center text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[80px]">
          наші майстри
        </h1>
      )}
      <MemberForMen
        teamMembers={menMasters}
        forMen={forMen}
        fullInfo={fullInfo}
        setFullInfo={setFullInfo}
      />
    </section>
  );
};

export default TeamForMenInfo;
