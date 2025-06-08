'use client';

import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PopUpBanner } from '@/components/pop-up';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const TrustBanner = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopUpOpen(true);
  };
  return (
    <div className="hidden md:block relative w-full pt-[339px] pb-[439px]">
      <motion.div
        className="absolute z-10 top-[200px] left-[50px] lg:left-[100px] xl:left-[330px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <DecoratedTitle className="max-w-[280px] mb-[24px]">
            нам можна довіряти
          </DecoratedTitle>
        </motion.div>

        <motion.p className="max-w-[380px] mb-[80px]" variants={itemVariants}>
          Ми відговоримо вас від завивки, якщо Вам не варто її робити
        </motion.p>

        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          href="https://beautyprosoftware.com/b/877643"
          target="_blank"
          onClick={handleButtonClick}
        >
          <Button className="bg-[#D7A908] hover:bg-[#f8cf38] transition duration-300 rounded-[40px] w-full max-w-[400px] h-[64px] text-[#212121] text-[24px]">
            Запис на консультацію
          </Button>
        </motion.a>
      </motion.div>

      <Image
        src="/trust-banner.webp"
        alt="trust banner"
        fill
        priority
        className="object-cover object-center w-full h-full"
      />
      <PopUpBanner
        visible={isPopUpOpen}
        close={() => setIsPopUpOpen(false)}
        forMen={false}
      />
    </div>
  );
};

export default TrustBanner;
