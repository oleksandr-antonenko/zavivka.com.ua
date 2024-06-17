"use client";

import React, { useState } from 'react';
import Member from './Member';
import { useAppSelector } from "@/store/hook";

const TeamInfo = ({forMen=false}: {forMen: boolean}) => {
    const teamMembers = useAppSelector(state => state.team.listOfTeam);
    const [fullInfo, setFullInfo] = useState<boolean>(false);
  return (
    <section className='max-w-[1440px] 2xl:mx-auto pt-[100px] pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[50px]'>
        {!fullInfo && <h1 className="font-bold text-center text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[80px]">наші майстри</h1>}
        <Member 
          teamMembers={teamMembers} 
          forMen={forMen} 
          fullInfo={fullInfo}
          setFullInfo={setFullInfo}
        />
    </section>
  )
}

export default TeamInfo
