'use client';
import SkillsList from './skills-list';
import DecoratedTitle from '../ui/decorated-title/decorated-title';
import { motion } from 'framer-motion';

const SkilsContainer = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <motion.div
        className="circle-grey top-0 right-[-50px] circle-right md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ amount: 0.3 }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          delay: 0.2,
        }}
      />
      <DecoratedTitle className="max-w-[361px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
        Майстерність, <br /> що говорить за себе
      </DecoratedTitle>
      <p className="text-[16px] md:text-[24px] text-white text-center md:text-start mb-[40px]">
        Причини зробити завивку саме у нас
      </p>
      <SkillsList />
      <motion.div
        className="circle-grey bottom-[-30%] left-[-700px]"
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.8 }}
        whileInView={{
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
        }}
        viewport={{ amount: 0.3 }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          delay: 0.4,
        }}
      />
    </section>
  );
};

export default SkilsContainer;
