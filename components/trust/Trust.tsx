"use client";
import { Button } from "@/shared/buttons"
import Image from "next/image";
import Girl from "./img/hair-perm-happy-client.jpg";
import Boy from "./img/menlong.jpg"
import { useState } from "react";
import { PopUpBanner } from "../pop-up";

export default function Trust({forMen=false, haircut=false}: {forMen?:boolean, haircut?: boolean}) {
  const image = !forMen ? Girl : Boy;
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const handleCloseTrust = () => {
    setOpenPopUp(false);
}
  
  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] min-h-[600px] 2xl:pl-5">
      <div className="flex items-center md:gap-[50px] xl:gap-[122px] relative">
        <div className="circle-grey circle-up-left left-0"></div>
        <div className="flex flex-col absolute md:static extraSm:top-[20px] sm:top-[150px] right-8 items-end md:items-center justify-center max-w-[345px] md:max-w-[590px]">
            {!haircut ? <h2 className="text-[24px] text-end md:text-center md:text-[40px] uppercase font-bold text-orange md:text-white mb-4 md:mb-8 xl:mb-[54px]">
              Чому нам можна довіряти
            </h2> : <h2 className="text-[24px] text-end md:text-center md:text-[40px] uppercase font-bold text-orange md:text-white mb-4 md:mb-8 xl:mb-[54px]">Чому нам можна довірити кучеряве волосся?</h2>}
            {!haircut ? <p className="text-[16px] md:text-[24px] mb-4 md:mb-10 xl:mb-20 text-end md:text-center">
              Ми відговоримо Вас від завивки, якщо Вам не варто її робити.
            </p> : <p className="text-[16px] md:text-[24px] mb-4 md:mb-10 xl:mb-20 text-end md:text-center">
            Ми закохані в кучері та працюємо з ними понад 20 років, тому майстри знають, як зробити так, щоб ваші очікування щодо стрижки стали реальністю на 100% і ви могли легко зробити укладку вдома, як щойно з салону.
            </p>}
          <Button 
            className="bg-white md:bg-orange"
            onClick={() => setOpenPopUp(true)}
          >Запис на консультацію</Button>
        </div>
        <div className="absolute top-0 left-[-20px] -z-10 md:z-0 md:static">
          <Image src={image} alt="Woman with curly hair" sizes="100vw" width={0} height={0} className="rounded-l-[20px] min-h-[500px]"/>
        </div>
        {openPopUp && 
        <PopUpBanner
          visible={openPopUp}
          close={handleCloseTrust}
          forMen={forMen}
        />}
      </div>
    </section>
  );
}
