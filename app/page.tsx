import { MainBanner } from "@/components/banner/MainBanner";
import { Services } from "@/components/services/Services";
import { Features } from "@/components/feature/Features";
import Digits from "@/components/header/digits/digits";
import Trust from "@/components/trust/Trust";
import { Prices } from "@/components/prices/Prices";
import { Reviews } from "@/components/reviews/Reviews";
import { Booking } from "@/components/booking/Booking";
import FAQ from "@/components/faq/FAQ";
import Contacts from "@/components/contacts/Contacts";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Services />
      <Features />
      <Digits />
      <Trust />
      <Prices />
      <Reviews />
      <FAQ />
      <Booking />
      <Contacts />
    </>
  );
}
