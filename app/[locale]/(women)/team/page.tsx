import { Contacts } from '@/components/contacts';
import { FAQ } from '@/components/faq';
import { TeamInfo } from '@/components/team';
import dynamic from 'next/dynamic';
const ConsultationContainer = dynamic(
  () => import('@/components/consultation/consultation-container'),
  {
    ssr: false,
  },
);

export default function Team() {
  return (
    <>
      <TeamInfo />
      <ConsultationContainer />
      <FAQ />
      <Contacts />
    </>
  );
}
