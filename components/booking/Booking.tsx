'use client';
import { Button } from '@/shared/buttons';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import type { FC } from 'react';
import { servicesForCheckboxWomen } from './constants';
import { BookingProps, DataForSubmit } from './types';
import BookingService from './BookingService';
import { Input } from '@/shared/input';
import AfterBooking from './AfterBooking';

const Booking: FC<BookingProps> = ({
  forMen = false,
  servicesForCheckbox = servicesForCheckboxWomen,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<DataForSubmit>({
    mode: 'onChange',
  });

  const onSubmit = (data: DataForSubmit) => {
    console.log(JSON.stringify(data));
    setOpenModal(true);
    reset();
  };

  return (
    <section
      className={`bg-cover bg-no-repeat py-[30px] px-2 flex items-center justify-center ${!forMen ? 'bg-backgroundForm' : 'bg-backgroundFormMen'}`}
    >
      <div className="flex flex-col items-center justify-center py-[24px] md:py-10 px-[39px] md:px-[70px] border border-orange rounded-[20px] w-full max-w-[750px] bg-[#0000001a] backdrop-blur-xl">
        <h2 className="font-semibold font-mali sm:text-nowrap text-center text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[36px]">
          Запишіться на послугу
        </h2>
        <p className="text-center mb-10 md:mb-[60px] text-[16px] md:text-[24px] max-w-[302px] md:max-w-[531px]">
          Ми підберемо для Вас оптимальний час і допоможемо вибрати майстра.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="true"
          id="bookingForm"
        >
          <div className="w-full flex flex-col md:flex-row gap-6 mb-10 md:mb-[60px]">
            <Input
              type="text"
              id="name"
              placeholder="Ім'я"
              name="name"
              register={register}
              errors={errors}
              errorText="Треба вказати ім'я"
            />
            <Input
              type="tel"
              id="phone"
              placeholder="+380(___)___-__-__"
              name="phone"
              register={register}
              errors={errors}
              errorText="Номер вказан не вірно"
              lengthMin={6}
              lengthMax={13}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-[50px] mb-[44px]">
              <BookingService
                servicesCheckbox={servicesForCheckbox}
                register={register}
              />
            </div>
            <div className="relative flex flex-col items-center mb-[80px] w-full max-w-[500px] mx-auto">
              <div className="flex gap-4 items-center ">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  {...register('agreeToPrivacy', { required: true })}
                  className="appearance-none cursor-pointer peer shrink-0 relative rounded-[6px] w-[25px] h-[25px]"
                />
                <span className="absolute w-[25px] h-[25px] border border-orange rounded-[6px] pointer-events-none transition duration-300 peer-hover:bg-yellow peer-checked:bg-orange"></span>
                <label
                  htmlFor="agreeToPrivacy"
                  className="text-[12px] text-[#fbfbfb] font-[300] text-center"
                >
                  Згоден (а) на{' '}
                  <a href="/privacy-policy" className="underline">
                    обробку персональних данних
                  </a>
                </label>
              </div>
              {errors.agreeToPrivacy && (
                <p className="absolute bottom-[-40px] md:bottom-[-20px] w-full max-w-[400px] mx-auto text-center text-xs text-red-500">
                  {errors.agreeToPrivacy &&
                    'Ви повинні погодитися з обробкою персональних даних'}
                </p>
              )}
            </div>
            <Button
              className="w-full max-w-[400px] h-[64px] transition duration-300 bg-[#D7A908] hover:bg-[#f8cf38]"
              type="submit"
            >
              Записатися зараз
            </Button>
          </div>
        </form>
      </div>
      {openModal && <AfterBooking visible={openModal} close={handleClose} />}
    </section>
  );
};

export default Booking;
