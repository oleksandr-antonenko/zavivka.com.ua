import { MainBanner } from '@/components/banner';
import { Booking, servicesForCheckboxHaircut } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import { Features, haircutFeatures } from '@/components/feature';
import { Prices } from '@/components/prices';
import { Trust } from '@/components/trust';
import React from 'react';

const HaircutPage = () => {
  return (
    <>
      <h1>haircut</h1>
      <MainBanner haircut />
      <Features features={haircutFeatures} haircut />
      <Trust haircut />
      <Prices haircut />
      <Booking servicesForCheckbox={servicesForCheckboxHaircut} />
      <Contacts />
    </>
  );
};

export default HaircutPage;
