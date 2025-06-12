import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ReasonItemProps {
  reason: {
    id: number;
    count: number;
    title: string;
    description: string;
  };
  index: number;
}

export const ReasonItem: React.FC<ReasonItemProps> = ({ reason, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        // ease: [0.6, 0.05, 0.01, 0.9],
      }}
      className="relative flex flex-col gap-4 px-4"
    >
      {/* Content wrapper with internal padding */}

      <h2 className="text-[48px] md:text-[80px] text-white font-bold font-bannerBold">
        {reason.count}
      </h2>
      <div className="">
        <h3 className="text-[20px] md:text-[24px] text-white font-bold mb-4">
          {reason.title}
        </h3>
        <p className="text-[16px] md:text-[24px] text-white">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};
