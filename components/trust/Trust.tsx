"use client";
import { Button } from "@/shared/buttons"
import Image from "next/image";
import Girl from "./img/hair-perm-happy-client.jpg";
import Boy from "./img/menlong.jpg"

export default function Trust({forMen=false}: {forMen?:boolean}) {
  const image = !forMen ? Girl : Boy;
  
  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] min-h-[600px] 2xl:pl-5">
      <div className="flex items-center md:gap-[50px] xl:gap-[122px] relative">
        <div className="circle-grey circle-up-left left-0"></div>
        <div className="flex flex-col absolute md:static top-[200px] right-8 items-end md:items-center justify-center max-w-[345px] md:max-w-[590px]">
            <h2 className="text-[24px] text-end md:text-center md:text-[40px] uppercase font-bold text-orange md:text-white mb-4 md:mb-8 xl:mb-[54px]">
              Чому нам можна довіряти
            </h2>
            <p className="text-[16px] md:text-[24px] mb-4 md:mb-10 xl:mb-20 text-end md:text-center">
              Ми відговоримо Вас від завивки, якщо Вам не варто її робити.
            </p>
          <Button className="bg-white md:bg-orange">Запис на консультацію</Button>
        </div>
        <div className="absolute top-0 left-[-20px] -z-10 md:z-0 md:static">
          <Image src={image} alt="Woman with curly hair" sizes="100vw" width={0} height={0} className="rounded-l-[20px] min-h-[500px]"/>
        </div>
      </div>
    </section>
  );
}
