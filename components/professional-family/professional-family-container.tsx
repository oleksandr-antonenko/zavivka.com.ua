'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DecoratedTitle from '../ui/decorated-title/decorated-title';

// Анимации
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ProfessionalFamilyContainer = () => {
  return (
    <motion.section
      className="relative w-full max-w-[1200px] mx-auto px-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="circle-grey bottom-[-30%] left-[-700px] blur-[50px]"
        variants={childVariants}
      ></motion.div>

      <motion.div variants={childVariants}>
        <DecoratedTitle className="mb-[60px] mt-[20px] max-w-[250px] md:max-w-[590px] mx-auto md:mx-0 md:mb-[54px]">
          наша сім’я <br /> професіоналів
        </DecoratedTitle>
      </motion.div>

      <motion.div
        className="relative w-full max-w-full h-[596px]"
        variants={childVariants}
      >
        <Image
          src="/family-banner.jpg"
          alt="professional family"
          fill
          priority
          className="object-cover object-[85%_center] md:object-center  rounded-2xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default ProfessionalFamilyContainer;
