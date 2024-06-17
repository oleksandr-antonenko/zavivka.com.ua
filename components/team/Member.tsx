"use client";

import React, { useState } from 'react';
import type {FC} from 'react';
import Image from 'next/image';
import { MemberProps } from './type';
import { MemberOfTeam } from '@/store/type';
import MemberFullInfo from './MemberFullInfo';

const Member: FC<MemberProps> = ({teamMembers, forMen=false, fullInfo, setFullInfo}) => {
    
    const [member, setMember] = useState<MemberOfTeam | null>(null);
    const openFullInfo = (photo: string) => {
      const memb = teamMembers.find(member => member.photo === photo);
      if(memb) setMember(memb);
      setFullInfo(true);
    }
    
  return (
    <>
     <div className='grid grid-cols-2 md:grid-cols-3 gap-5 cursor-pointer'>
       {!fullInfo && teamMembers.map((teamMember, index) => (
          <div
            key={`${teamMember.name}${index}`}
            onClick={() => {
              openFullInfo(teamMember.photo);
          }}
            className='max-w-[386px] border rounded-lg border-grey-light hover:border-orange p-5 extraSm:text-[12px] sm:text-[16px]'
          >
              <Image src={teamMember.photo} alt={teamMember.name} sizes="100vw" width={0} height={0} className='w-full mb-[25px]'/>
              <p className='mb-4'>{teamMember.name}</p>
              <p className='text-orange '>{teamMember.category}</p>
          </div>
          ))
           }
     </div>
    {fullInfo && 
    <MemberFullInfo 
      member={member} 
      forMen={forMen}
      close={setFullInfo}
    />}
    </>
  )
}

export default Member
