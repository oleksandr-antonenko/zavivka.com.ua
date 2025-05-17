import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const TrustBanner = () => {
  return (
    <div className="hidden md:block relative w-full pt-[339px] pb-[439px]">
      <div className="absolute z-10 top-[200px] left-[50px] lg:left-[100px] xl:left-[330px]">
        <DecoratedTitle className="max-w-[280px] mb-[24px]">
          нам можна довіряти
        </DecoratedTitle>
        <p className="max-w-[380px] mb-[80px]">
          Ми відговоримо вас від завивки, якщо Вам не варто її робити
        </p>
        <a href="https://beautyprosoftware.com/b/877643" target="_blank">
          <Button className="bg-[#D7A908] hover:bg-[#f8cf38] transition duration-300 rounded-[40px] w-full max-w-[400px] h-[64px] text-[#212121] text-[24px]">
            Запис на консультацію
          </Button>
        </a>
      </div>
      <Image
        src="/trust-banner.webp"
        alt="trust banner"
        fill
        priority
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
};

export default TrustBanner;
