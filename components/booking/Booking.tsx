"use client";
import { Button } from "@/shared/buttons";
import { useForm } from 'react-hook-form';
import { servicesForCheckbox } from "./constants";
import { DataForSubmit} from "./types";
import BookingService from "./BookingService";

const Booking = () => {
  const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
      } = useForm<DataForSubmit>({
        mode: "onBlur"
      });

      const onSubmit = (data: DataForSubmit) => {
        alert(JSON.stringify(data));
        reset()
      }

  return (
    <section className="containerBox">
      <div className={`py-[30px] md:py-[122px] bg-cover bg-center bg-backgroundForm flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center py-10 px-[14px] md:py-[50px] md:px-[73px] border border-orange rounded-[20px] max-w-[700px] bg-[#0000001a] backdrop-blur-xl">
          <h2 className="font-semibold font-mali sm:text-nowrap text-center text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[36px]">Запишіться на послугу</h2>
          <p className="text-center mb-10 md:mb-[60px] text-[16px] md:text-[24px] max-w-[302px] md:max-w-[531px]">Ми підберемо для Вас оптимальний час і допоможемо вибрати майстра.</p>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="true" id="bookingForm">
             <div className="w-full flex flex-col md:flex-row gap-6 mb-10 md:mb-[60px]">
                <input
                  type="text"
                  id="name"
                  placeholder="Ім'я"
                  {...register('name', { required: true })}
                  className="rounded py-3 px-[30px] border border-grey-light bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange text-[16px] text-white w-full placeholder:text-white placeholder:text-[12px] placeholder:font-banner"
                />
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: true })}
                  placeholder="+380674413565"
                  className="rounded py-3 px-[30px] border border-grey-light bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange text-[16px] text-white w-full placeholder:text-white placeholder:text-[12px] placeholder:font-banner"
                />
             </div>
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-[50px] mb-[73px] md:mb-[60px]">
                      <BookingService servicesCheckbox={servicesForCheckbox} register={register}/>
                  </div>
                  <Button type="submit">Записатися зараз</Button>
                  <p className="text-center mt-5 md:mt-4 text-[16px] max-w-[296px]">Натискаючи кнопку даєте згоду на обробку персональних данних </p>
                </div>
              </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
