'use client';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ReasonItem } from './ReasonItem';
import { AnimatedLine } from './AnimatedLine';
import { reasonsData } from './reasons-data';
import DecoratedTitle from '../ui/decorated-title/decorated-title';

export const ReasonsContainer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end 0.8'],
  });

  return (
    <div ref={ref} className="">
      <div className="container w-full max-w-[1200px] mx-auto px-6 relative">
        <DecoratedTitle className="max-w-[361px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
          Переваги сучасної завивки
        </DecoratedTitle>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[16px] md:text-[24px] text-white text-center md:text-start mb-[40px]"
        >
          Забудьте, якою була завивка раніше. Ми покажемо, якою вона стала
        </motion.p>

        <div className="relative z-10">
          <AnimatedLine
            scrollYProgress={scrollYProgress}
            reasonsData={reasonsData}
          />
          <div className="flex flex-col gap-6 overflow-hidden">
            {reasonsData.map((reason, index) => (
              <ReasonItem key={reason.id} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
