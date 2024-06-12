import { MemberFullInfo } from '@/components/team';
import React from 'react';
import { Contacts } from "@/components/contacts";
import { FAQ } from "@/components/faq";

const MemberInfo = () => {
  return (
    <>
      <MemberFullInfo/>
      <FAQ/>
      <Contacts/>
    </>
  )
}

export default MemberInfo
