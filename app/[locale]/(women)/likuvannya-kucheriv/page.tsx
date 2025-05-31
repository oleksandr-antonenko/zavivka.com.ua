import BannerForAllPages from '@/components/banner/banner-for-all-pages';
import { Booking } from '@/components/booking';
import { Contacts } from '@/components/contacts';
import { Prices } from '@/components/prices';
import SignalListContainer from '@/components/THERAPY/therapy-signa-list/signal-list-container';
import TherapySliderWrapper from '@/components/THERAPY/therapy-slider/therapy-slider-container';

const TherapyPage = () => {
  return (
    <div>
      <BannerForAllPages
        title="Лікування кучерів"
        description="Процедура відновлення, яка пухнасті і некеровані локони знову зробить м’яким, пружними та слухняними.Результат побачите одразу, ефект до 3-х місяців."
        buttonText="Онлайн запис"
        buttonLink="https://beautyprosoftware.com/b/877643"
        videoSrc="/videos/banner.mp4"
        posterSrc="/images/banner.jpg"
      />
      <section className="py-[60px] xl:py-[150px]">
        <SignalListContainer />
      </section>
      <section>
        <TherapySliderWrapper />
      </section>
      <section className="py-[60px] xl:py-[150px]">
        <Prices isTherapy={true} />
      </section>
      <section className="pb-[60px] xl:pb-[150px]">
        <Booking />
      </section>
      <Contacts />
    </div>
  );
};

export default TherapyPage;
