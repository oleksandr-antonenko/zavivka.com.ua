'use client';

import TypingHeader from '../ui/typing-header';
import Image from 'next/image';

const MainBanner = ({
  forMen = false,
  haircut = false,
}: {
  forMen?: boolean;
  haircut?: boolean;
}) => {
  const title = haircut
    ? 'Стрижка природних\nкучерів в Києві'
    : `${forMen ? 'Чоловіча ' : ''}${forMen ? 'завивка' : 'Завивка'}\nволосся в Києві`;

  return (
    <section className="w-full relative h-[800px]">
      {/* Фон баннера для мобильных — картинка */}
      <div className="absolute z-[-10] top-0 left-0 w-full h-full block md:hidden">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Фон баннера для планшетов и выше — видео */}
      <video
        className="absolute z-[-10] top-0 left-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
        disablePictureInPicture
        controls={false}
        poster="/images/banner.jpg"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>

      <div className="flex max-w-[1440px] 2xl:mx-auto flex-col px-2 py-[60px] md:py-[195px] w-full h-full">
        <div className="text-2xl text-white mt-auto md:mt-0">
          <TypingHeader text={title} />
        </div>

        {!forMen && (
          <p className="mb-[23px] md:mb-[100px] w-full max-w-[360px] mx-auto md:mx-0 mt-[50px] md:mt-0 text-center text-[20px] md:text-start">
            Спеціалізований салон краси. Ми зберігаємо здоров`я волосся та
            полегшуємо повсякденний догляд.
          </p>
        )}

        <a href="https://beautyprosoftware.com/b/877643" target="_blank">
          <button className="rounded-[40px] h-[56px] flex justify-center items-center text-[#212121] text-[20px] w-full max-w-[280px] md:max-w-[361px] mx-auto md:mx-0 transition duration-300 bg-[#D7A908] hover:bg-[#f8cf38]">
            Запис на консультацію
          </button>
        </a>
      </div>
    </section>
  );
};

export default MainBanner;
