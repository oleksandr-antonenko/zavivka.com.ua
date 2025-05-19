'use client';

import React from 'react';
import type { FC } from 'react';
import { MemberServiceProps } from './type';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const MemberService: FC<MemberServiceProps> = ({ servicePrices }) => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[800px]">
      {servicePrices.map((service, index) => (
        <AccordionItem
          value={`item-${index}`}
          key={index}
          className="border-b border-grey-light pt-[20px]"
        >
          <AccordionTrigger className="flex justify-between items-center font-bold text-[16px] pr-3 py-4 hover:text-orange transition-colors">
            <div className="">{service.serviceTitle}</div>
            <div className="ml-auto mr-4">{service.price} грн</div>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="text-[14px] text-grey-dark leading-[1.5]">
              {service.descriptionForPrice}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MemberService;
