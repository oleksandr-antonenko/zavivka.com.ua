import Image from 'next/image';
import type { FC } from 'react';
import MemberService from './components/MemberService';
import PhotoSlider from './components/PhotoSlider';
import { MemberFullProps } from './type';
import OrderBlock from './components/OrderBlock';

const MemberFullInfo: FC<MemberFullProps> = ({ forMen = false, member }) => {
  return (
    <section className="relative">
      <div className="rounded-full -right-[300px] sm:-right-[200px] -top-[2px] w-[500px] h-[500px] md:w-[580px] md:h-[580px] xl:w-[600px] xl:h-[600px] absolute -z-10 bg-grey-middle blur-xl" />
      {member && (
        <>
          <div
            className={`relative mb-[40px] max-w-[150px] md:max-w-[250px] mx-auto md:mx-0`}
          >
            <Image
              src="/decor-title.svg"
              alt="decor title image"
              width={10}
              height={10}
              className={`absolute top-[0px] left-[-5px] xl:left-[-85px] w-[95px] h-[40px] md:w-[191px] md:h-[81px] z-[-1]`}
            />
            <h2
              className={`font-bold text-center md:text-start text-[24px] md:text-[40px] uppercase`}
            >
              майстер
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-start md:gap-[50px] lg:gap-[100px] h-full">
            <div className="relative mb-[16px] z-10 w-full aspect-[3/4] md:h-auto md:flex-1 max-w-full md:max-w-[480px]">
              <Image
                src={member.photo}
                alt={member.name}
                sizes="100vw"
                fill
                priority
                className="object-cover w-full rounded-[16px]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-[24px] text-[#fbfbfb] capitalize mb-[16px]">
                {member.name}
              </h2>
              <p className="text-[16px] flex justify-between max-w-[200px] mb-[20px]">
                <span className="text-orange font-bold">{member.category}</span>
              </p>
              <p className="text-[16px] flex justify-between max-w-[200px] mb-[10px]">
                Досвід{' '}
                <span className="font-bold w-1/2 text-start">
                  {member.experience}
                </span>
              </p>
              <MemberService servicePrices={member.listOfService} />
            </div>
          </div>
          <section className="pt-[60px]">
            <OrderBlock />
          </section>
          <section className="relative pt-[60px] md:pt-[150px]">
            <div className="rounded-full left-0 -top-[60px] md:w-[95px] w-[60px] h-[60px] md:h-[95px] absolute -z-5 bg-yellow blur-xl" />
            <div className="rounded-full -left-[300px] md:-left-[350px] xl:-left-[400px] -top-[40px] w-[500px] h-[500px] md:w-[580px] md:h-[580px] xl:w-[600px] xl:h-[600px] absolute -z-10 bg-grey-middle blur-xl" />
            <div className="flex flex-col gap-5">
              <div className={`relative mb-[40px] mx-auto md:mx-0 w-full`}>
                <Image
                  src="/decor-title.svg"
                  alt="decor title image"
                  width={10}
                  height={10}
                  className={`absolute top-[0px] left-[-5px] xl:left-[-85px] w-[95px] h-[40px] md:w-[191px] md:h-[81px] z-[-1]`}
                />
                <h2
                  className={`font-bold text-center md:text-start text-[24px] md:text-[40px] uppercase`}
                >
                  роботи майстра
                </h2>
              </div>
              <PhotoSlider
                photosMen={member.imagesOfWorksForMen}
                photosWomen={member.imagesOfWorksForWomen}
                forMen={forMen}
              />
            </div>
          </section>
        </>
      )}
    </section>
  );
};

export default MemberFullInfo;
