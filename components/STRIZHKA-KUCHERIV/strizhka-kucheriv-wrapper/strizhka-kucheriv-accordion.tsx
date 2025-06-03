'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { strizhkaData } from './strizhka-kucheriv-data';

const listVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  closed: {},
};

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

const StrizhkaAccordion = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 relative">
      <div className="with-circle"></div>

      <Accordion type="single" collapsible className="w-full">
        {strizhkaData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="">
            <AccordionTrigger className="text-[22px] text-[#fbfbfb]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#fbfbfb]">
              {Array.isArray(item.answer) ? (
                <motion.ol
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  className="flex flex-col gap-4"
                >
                  {item.answer.map((text, i) => (
                    <motion.li key={i} variants={itemVariants}>
                      {text}
                    </motion.li>
                  ))}
                </motion.ol>
              ) : (
                <p>{item.answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default StrizhkaAccordion;
