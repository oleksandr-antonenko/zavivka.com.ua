'use client';

import { motion } from 'framer-motion';

const typingVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12, // замедлили
    },
  }),
};

const TypingHeader = ({ text }: { text: string }) => {
  return (
    <h1 className="leading-[130%] text-[40px] md:text-7xl mb-10 font-bold text-center md:text-start font-bannerBold">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={typingVariant}
        >
          {char === '\n' ? <br /> : char}
        </motion.span>
      ))}
    </h1>
  );
};

export default TypingHeader;
