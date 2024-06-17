import { ButtonLink } from "@/shared/buttons";

const MainBanner = ({
  forMen = false,
  haircut = false,
}: {
  forMen?: boolean;
  haircut?: boolean;
}) => {
  return (
    <section className="w-full relative">
      <div className="flex max-w-[1440px] 2xl:mx-auto flex-col justify-end w-full h-[800px]">
        <div className="font-banner text-2xl text-white pl-[27px] md:pl-[100px] xl:pl-[260px] 2xl:pl-5 pb-[60px]">
          {!haircut && (
            <h1 className="leading-[130%] text-[40px] md:text-7xl mb-10 font-bold text-center md:text-start">
              {forMen && <span>Чоловіча</span>}{" "}
              <span className={`${forMen ? "lowercase" : ""}`}>Завивка</span>{" "}
              <br className="hidden md:block" /> волосся в Києві
            </h1>
          )}
          {haircut && (
            <h1 className="leading-[130%] text-[40px] md:text-7xl mb-10 font-bold text-center md:text-start">
              Стрижка природних <br /> кучерів в Києві
            </h1>
          )}
          {!forMen && (
            <p className="mb-[60px] text-center md:text-start">
              Спеціалізований салон краси. <br className="hidden md:block" /> Ми
              зберігаємо здоров`я волосся та <br className="hidden md:block" />{" "}
              полегшуємо повсякденний догляд.
            </p>
          )}

          {!forMen && (
            <div className="flex extraSm:flex-col extraSm:items-center sm:justify-center md:justify-start sm:flex-row gap-6 md:gap-[61px]">
              <ButtonLink link="/"> Жінки </ButtonLink>
              <ButtonLink link="/for-men"> Чоловіки </ButtonLink>
            </div>
          )}
        </div>
        <video
          className="absolute z-[-10] top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          poster="/images/banner.jpg"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default MainBanner;
