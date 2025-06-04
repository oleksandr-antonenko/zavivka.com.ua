'use client';

import React, { useState } from 'react';
import Member from './Member';
import { useAppSelector } from '@/store/hook';

const TeamInfo = ({ forMen = false }: { forMen?: boolean }) => {
  const teamMembers = useAppSelector((state) => state.team.listOfTeam);
  const [fullInfo, setFullInfo] = useState<boolean>(false);
  return (
    <section className="max-w-[1440px] px-2 mx-auto pt-[50px] md:pt-[100px]">
      {!fullInfo && (
        <h2 className="font-bold text-center text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[80px]">
          наші майстри
        </h2>
      )}
      <Member
        teamMembers={teamMembers}
        forMen={forMen}
        fullInfo={fullInfo}
        setFullInfo={setFullInfo}
      />
    </section>
  );
};

export default TeamInfo;
