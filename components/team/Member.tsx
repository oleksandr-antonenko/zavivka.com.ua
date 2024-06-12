"use client";

import React from 'react';
import type {FC} from 'react';
import Image from 'next/image';
import { openFullInfo } from '@/store/TeamSlice';
import { useAppDispatch } from '@/store/hook';
import { useRouter } from 'next/navigation'
import { MemberProp } from './type';

const Member: FC<MemberProp> = ({teamMembers}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
  return (
    <>
     {teamMembers.map((teamMember, index) => (
        <div 
          key={`${teamMember.name}${index}`}
          onClick={() => {
            dispatch(openFullInfo(teamMember.photo));
            router.push('/team/member-info')
        }}
          className='max-w-[386px] border rounded-lg border-grey-light hover:border-orange p-5 extraSm:text-[12px] sm:text-[16px]'
        >
            <Image src={teamMember.photo} alt={teamMember.name} sizes="100vw" width={0} height={0} className='w-full mb-[25px]'/>
            <p className='mb-4'>{teamMember.name}</p>
            <p className='text-orange '>{teamMember.category}</p>
        </div>
        ))
    } 
    </>
  )
}

export default Member
