'use client';
import Link from 'next/link';
import type { FC } from 'react';
import Image from 'next/image';
import { MemberProps } from './type';

const Member: FC<MemberProps> = ({ teamMembers, fullInfo }) => {
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 cursor-pointer">
        {!fullInfo &&
          teamMembers.map((teamMember) => (
            <li
              key={`${teamMember.id}`}
              className="max-w-[386px] border rounded-lg border-grey-light hover:border-orange p-5 extraSm:text-[12px] sm:text-[16px]"
            >
              <Link href={`/team/${teamMember.slug.toLowerCase()}`}>
                <Image
                  src={teamMember.photo}
                  alt={teamMember.name}
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full mb-[25px]"
                />
                <p className="mb-4">{teamMember.name}</p>
                <p className="text-orange ">{teamMember.category}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Member;
