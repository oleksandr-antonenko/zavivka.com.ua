import { Features, featuresMen } from "@/components/feature";
import { MainBanner } from "@/components/banner";
import { Trust } from "@/components/trust";
import { Contacts } from "@/components/contacts";
import { Booking, servicesForCheckboxMen } from "@/components/booking";
import { Prices } from "@/components/prices";
import { Zavivka } from "@/components/zavivka";


export default function HomeMen() {
  return (
    <>
      <MainBanner forMen/>
      <Features forMen features={featuresMen}/>
      <Zavivka/>
      <Trust forMen />
      <Prices forMen/>
      <Booking forMen servicesForCheckbox={servicesForCheckboxMen} />
      <Contacts />
    </>
  );
}
