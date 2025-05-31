'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { curlFaqItems } from './curl-faq-data';

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

const CurlFaq = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 relative">
      <div className="with-circle">
        <div className="relative mb-[20px] max-w-[150px] md:max-w-[250px] mx-auto md:mx-0">
          <Image
            src="/decor-title.svg"
            alt="decor title image"
            width={10}
            height={10}
            className="absolute top-[0px] left-[-5px] xl:left-[-85px] w-[95px] h-[40px] md:w-[191px] md:h-[81px] z-[-1]"
          />
          <h2 className="font-bold text-center md:text-start text-[24px] md:text-[40px] uppercase">
            faq
          </h2>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {curlFaqItems.map((item, index) => (
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

export default CurlFaq;
