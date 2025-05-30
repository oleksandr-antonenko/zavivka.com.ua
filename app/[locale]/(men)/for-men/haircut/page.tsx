import { MainBanner } from '@/components/banner'
import { Booking, servicesForCheckboxMen } from '@/components/booking'
import { Contacts } from '@/components/contacts'
import { Features, haircutFeatures } from '@/components/feature'
import { Prices } from '@/components/prices'
import { Trust } from '@/components/trust'
import React from 'react'

const HaircutPage = () => {
  return (
    <>
      <MainBanner haircut/>
      <Features features={haircutFeatures} haircut/>
      <Trust haircut forMen/>
      <Prices haircut forMen/>
      <Booking servicesForCheckbox={servicesForCheckboxMen} forMen/>
      <Contacts/>
    </>
  )
}

export default HaircutPage
