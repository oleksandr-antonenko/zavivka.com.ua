'use client';
import Link from 'next/link';
import type { FC } from 'react';
import Image from 'next/image';
import { MemberProps } from './type';
import { motion } from 'framer-motion';

const Member: FC<MemberProps> = ({ teamMembers }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-[16px] lg:gap-y-[60px] gap-x-[16px] lg:gap-x-[20px] pb-[100px] md:pb-[150px]">
      {teamMembers.map((teamMember) => (
        <motion.li
          key={teamMember.id}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="w-full max-w-[386px] h-[500px] md:h-full flex flex-col rounded-[15px] overflow-hidden"
          variants={{
            rest: { borderColor: 'transparent', padding: '0px' },
            hover: { borderColor: '#FFD700', padding: '20px' }, // жёлтый бордер
          }}
          transition={{ type: 'tween', duration: 0.3 }}
          style={{ borderWidth: '2px', borderStyle: 'solid' }}
        >
          <Link
            className="flex flex-col h-full p-2"
            href={`/team/${teamMember.slug.toLowerCase()}`}
          >
            <motion.div
              variants={{
                rest: { height: '396px' },
                hover: { height: '198px' }, // 50% от изначальной высоты
              }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-full mb-[18px] md:mb-[25px] rounded-[15px] overflow-hidden"
            >
              <Image
                src={teamMember.photo}
                alt={teamMember.name}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="">
              <p className="mb-4 text-[16px] md:text-[24px] max-w-[120px] mx-auto md:mx-0 text-center md:text-left">
                {teamMember.name}
              </p>
              <p className="text-orange text-[14px] md:text-[16px] text-center md:text-left">
                {teamMember.category}
              </p>
            </div>

            {/* Блок специализации */}
            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                  y: 20,
                  height: 0,
                  padding: 0,
                  marginTop: 0,
                  transition: { duration: 0.3 },
                },
                hover: {
                  opacity: 1,
                  y: 0,
                  height: 150, // максимально возможная высота
                  padding: 16, // p-4 = 16px
                  marginTop: 0,
                  transition: {
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.1,
                  },
                },
              }}
              className="rounded-[10px]"
            >
              <p className="text-[16px] mb-1 text-[#eaeaea]">Спеціалізація</p>
              <ul className="list-disc pl-4">
                {teamMember.specialization.map((spec, index) => (
                  <li
                    className="text-[12px] md:text-[16px] text-[#eaeaea]"
                    key={index}
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default Member;
