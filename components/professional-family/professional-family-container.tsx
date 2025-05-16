import Image from 'next/image';
import DecoratedTitle from '../ui/decorated-title/decorated-title';
const ProfessionalFamilyContainer = () => {
  return (
    <section className="relative pb-[60px] xl:pb-[150px] w-full max-w-[1200px] mx-auto px-2">
      <div className="circle-grey bottom-[-30%] left-[-700px] blur-[50px]"></div>
      <DecoratedTitle className="mb-[60px] mt-[20px] max-w-[250px] md:max-w-[590px] mx-auto md:mx-0 md:mb-[54px]">
        наша сім’я <br /> професіоналів
      </DecoratedTitle>
      <div className="relative w-full max-w-full h-[596px]">
        <Image
          src="/family-banner.jpg"
          alt="professional family"
          fill
          priority
          className="object-cover object-[85%_center] md:object-center  rounded-2xl"
        />
      </div>
    </section>
  );
};

export default ProfessionalFamilyContainer;
