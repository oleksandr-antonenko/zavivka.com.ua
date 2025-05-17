'use client';
import { motion } from 'framer-motion';
import { skills } from './skills-data';

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

const SkillsList = () => {
  return (
    <motion.ul
      className="flex flex-col items-center justify-center md:flex-wrap md:flex-row lg:flex-nowrap lg:justify-between gap-[25px] md:gap-[16px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // 30% блока должно быть видно для запуска
    >
      {skills.map((skill) => (
        <motion.li
          key={skill.id}
          className="flex flex-col items-center justify-center gap-2"
          variants={itemVariants}
        >
          <span className="text-[48px] md:text-[80px] text-white font-bold font-bannerBold">
            {skill.count}
          </span>
          <div>
            <h3 className="text-center text-[20px] md:text-[24px] text-white font-bold md:mb-[30px]">
              {skill.title}
            </h3>
            <p className="text-center text-[16px] text-white md:max-w-[220px] mx-auto">
              {skill.description}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SkillsList;
