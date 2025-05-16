'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ServiceListProps } from './types';
import type { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const getMobileGridClasses = (index: number) => {
  switch (index) {
    case 0:
      return 'row-start-1 col-start-1 md:col-span-2 md:row-start-1 md:col-start-1';
    case 1:
      return 'row-start-2 col-start-1 md:col-span-1 md:row-start-1 md:col-start-3';
    case 2:
      return 'row-start-3 col-start-1 md:col-span-1 md:row-start-1 md:col-start-4';
    case 3:
      return 'row-start-1 col-start-2 md:col-span-2 md:row-start-2 md:col-start-1';
    case 4:
      return 'row-start-2 col-start-2 row-span-2 md:row-span-1 md:col-span-2 md:row-start-2 md:col-start-3';
    default:
      return '';
  }
};

const ModernServiceCard: FC<ServiceListProps> = ({ services }) => {
  const [currentVideo, setCurrentVideo] = useState<number>(0);

  useEffect(() => {
    const playScroll = () => {
      if (currentVideo === services.length - 1) {
        return setCurrentVideo(0);
      }
      return setCurrentVideo(currentVideo + 1);
    };

    const interval = setInterval(() => {
      playScroll();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentVideo, services.length]);

  return (
    <>
      {services.map((service, i) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: i % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 * i }}
          className={`relative will-change-transform  ${getMobileGridClasses(i)} overflow-hidden rounded-[20px] group`}
        >
          <Link href={service.url}>
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="max-w-[96px] md:max-w-full md:font-bold md:uppercase absolute text-[16px] left-2 md:left-[30px] bottom-[15px] lowercase">
              {service.name}
            </div>
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default ModernServiceCard;
