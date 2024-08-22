"use client";
import { Button } from "@/shared/buttons";
import { useForm } from "react-hook-form";
import {useState} from "react";
import type {FC} from "react";
import { servicesForCheckboxWomen } from "./constants";
import { BookingProps, DataForSubmit} from "./types";
import BookingService from "./BookingService";
import { Input } from "@/shared/input";
import AfterBooking from "./AfterBooking";
import { InputPhone } from "@/shared/inputPhone";

const Booking: FC<BookingProps> = ({forMen=false, servicesForCheckbox=servicesForCheckboxWomen}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleClose = () => {
    setOpenModal(false);
  }
  const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid },
        reset,
      } = useForm<DataForSubmit>({
        mode: "onBlur"
      });

      const onSubmit = (data: DataForSubmit) => {
        console.log(JSON.stringify(data));
        setOpenModal(true);
        reset()
      }

  return (
    <section className="containerBox">
      <div className={`py-[30px] md:py-[122px] bg-cover bg-center ${!forMen ? "bg-backgroundForm" : "bg-backgroundFormMen"} flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center py-10 px-[14px] md:py-[50px] md:px-[73px] border border-orange rounded-[20px] max-w-[700px] bg-[#0000001a] backdrop-blur-xl">
          <h2 className="font-semibold font-mali sm:text-nowrap text-center text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[36px]">Запишіться на послугу</h2>
          <p className="text-center mb-10 md:mb-[60px] text-[16px] md:text-[24px] max-w-[302px] md:max-w-[531px]">Ми підберемо для Вас оптимальний час і допоможемо вибрати майстра.</p>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="true" id="bookingForm">
             <div className="w-full flex flex-col md:flex-row gap-6 mb-10 md:mb-[60px]">
                <div className="!basis-1/2">
                  <Input
                    type="text"
                    id="name"
                    placeholder="Ім'я"
                    name="name"
                    register={register}
                    errors={errors}
                    errorText="Треба вказати ім'я"
                  />
                </div>
                <div className="basis-1/2">
                  <InputPhone
                    control={control}
                    name="phoneBooking"
                    errors={errors}
                    errorText="Номер вказан не вірно"
                  />
                </div>
              
             </div>
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-[50px] mb-[73px] md:mb-[60px]">
                      <BookingService servicesCheckbox={servicesForCheckbox} register={register}/>
                  </div>
                  <Button type="submit">Записатися зараз</Button>
                  <p className="text-center mt-5 md:mt-4 text-[16px] max-w-[296px]">Натискаючи кнопку даєте згоду на <span className="line-block border-b border-b-grey-light">обробку персональних данних</span> </p>
                </div>
              </form>
        </div>
       {openModal && <AfterBooking 
          visible={openModal} 
          close={handleClose}
        />}
      </div>
    </section>
  );
}

export default Booking;
