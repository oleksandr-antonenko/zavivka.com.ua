'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const TrustStatistics = () => {
  return (
    <motion.div
      className="relative px-2 md:px-0 pb-[60px] md:pb-[150px] pt-[40px] md:pt-[150px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="circle-grey top-0 right-0 circle-right"></div>

      <motion.div className="mb-[40px] md:hidden" variants={itemVariants}>
        <DecoratedTitle className="max-w-[280px] mx-auto mb-[24px] uppercase text-[20px] font-bold text-[#fbfbfb]">
          Чому нам можна довіряти?
        </DecoratedTitle>
        <p className="max-w-[270px] text-center mx-auto text-[16px] text-[#fbfbfb]">
          Ми відговоримо вас від завивки, якщо Вам не варто її робити
        </p>
      </motion.div>

      <motion.ul
        className="flex flex-col md:flex-row justify-center items-center gap-[70px]"
        variants={containerVariants}
      >
        {[
          { count: '6', label: 'філіалів в Європі' },
          { count: '+500', label: 'задоволенних клієнтів' },
          { count: '5', label: 'років досвіду' },
        ].map(({ count, label }) => (
          <motion.li
            key={label}
            className="flex flex-col justify-center items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="font-bold text-[48px] md:text-[80px] text-[#fbfbfb] font-bannerBold">
              {count}
            </h3>
            <p className="font-bold text-[17px] md:text-[24px] text-[#fbfbfb]">
              {label}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div variants={itemVariants}>
        <Button className="md:hidden flex justify-center items-center bg-[#D7A908] hover:bg-[#f8cf38] transition duration-300 rounded-[40px] w-full max-w-[361px] h-[50px] text-[#212121] text-[20px] mx-auto mt-[40px]">
          Запис на консультацію
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default TrustStatistics;
