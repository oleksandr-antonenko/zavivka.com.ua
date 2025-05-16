import { Button } from '@/components/ui/button';
import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';

const TrustStatistics = () => {
  return (
    <div className="relative px-2 md:px-0 pb-[60px] md:pb-[150px] pt-[40px] md:pt-[150px]">
      <div className="circle-grey top-0 right-0 circle-right blur-[50px]"></div>
      <div className="mb-[40px] md:hidden">
        <DecoratedTitle className="max-w-[280px] mx-auto mb-[24px] uppercase text-[20px] font-bold text-[#fbfbfb]">
          Чому нам можна довіряти?
        </DecoratedTitle>
        <p className="max-w-[270px] text-center mx-auto text-[16px] text-[#fbfbfb]">
          Ми відговоримо вас від завивки, якщо Вам не варто її робити
        </p>
      </div>
      <ul className="flex flex-col md:flex-row justify-center items-center gap-[70px]">
        <li className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-[48px] md:text-[80px] text-[#fbfbfb] font-bannerBold">
            6
          </h3>
          <p className="font-bold text-[17px] md:text-[24px] text-[#fbfbfb]">
            філіалів в Європі
          </p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-[48px] md:text-[80px] text-[#fbfbfb] font-bannerBold">
            +500
          </h3>
          <p className="font-bold text-[17px] md:text-[24px] text-[#fbfbfb]">
            задоволенних клієнтів
          </p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-[48px] md:text-[80px] text-[#fbfbfb] font-bannerBold">
            5
          </h3>
          <p className="font-bold text-[17px] md:text-[24px] text-[#fbfbfb]">
            років досвіду
          </p>
        </li>
      </ul>
      <Button className="md:hidden flex justify-center items-center bg-[#D7A908] hover:bg-[#f8cf38] transition duration-300 rounded-[40px] w-full max-w-[361px] h-[50px] text-[#212121] text-[20px] mx-auto mt-[40px]">
        Запис на консультацію
      </Button>
    </div>
  );
};

export default TrustStatistics;
