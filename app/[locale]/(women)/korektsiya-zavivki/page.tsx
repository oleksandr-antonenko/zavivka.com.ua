import BannerForAllPages from '@/components/banner/banner-for-all-pages';
import { Booking } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import CurlFaq from '@/components/CURL-CORRECTION/curl-faq/curl-faq';
import CurlSliderWrapper from '@/components/CURL-CORRECTION/curl-slider/curl-slider-wrapper';
import { Prices } from '@/components/prices';
const CurlCorrectionPage = () => {
  return (
    <>
      <BannerForAllPages
        title="Корекція завивки"
        buttonText="Онлайн запис"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
      />
      <section className="py-[60px] xl:py-[150px]">
        <CurlFaq />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <CurlSliderWrapper />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Prices isCorrection={true} />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking isCorrection={true} />
      </section>
      <Contacts />
    </>
  );
};

export default CurlCorrectionPage;
