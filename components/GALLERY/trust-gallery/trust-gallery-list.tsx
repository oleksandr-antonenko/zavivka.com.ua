'use client';
import { trustList } from './list-data';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const TrustGalleryList = () => {
  return (
    <motion.ul
      className="flex flex-col lg:items-baseline justify-center md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between gap-[25px] md:gap-[16px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // 30% блока должно быть видно для запуска
    >
      {trustList.map((trust) => (
        <motion.li
          key={trust.id}
          className="flex flex-col items-center justify-center gap-2"
          variants={itemVariants}
        >
          <span className="text-[48px] md:text-[80px] text-white font-bold font-bannerBold">
            {trust.count}
          </span>

          <h3 className="text-center text-[20px] md:text-[24px] text-white font-bold mb-[20px] md:mb-[30px] mx-auto">
            {trust.title}
          </h3>
          <p className="text-center text-[16px] text-white md:max-w-[220px] mx-auto">
            {trust.description}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TrustGalleryList;
