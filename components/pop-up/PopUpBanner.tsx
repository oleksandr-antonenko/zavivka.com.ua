"use client";
import { Button, ButtonLink } from '@/shared/buttons';
import React, { useEffect, useState } from 'react';
import type {FC, MouseEvent} from 'react';
import Image from 'next/image';
import closeIcone from '@/shared/img/close.png';
import man from './img/man.jpg';
import woman from './img/banner.jpg';
import { PopUpProps } from './type';
import { Input } from '@/shared/input';
import { useForm } from "react-hook-form";
import { DataForSubmit } from '../booking';
import { InputPhone } from '@/shared/inputPhone';

const PopUpBanner: FC<PopUpProps> = ({visible, close, forMen=false}) => {
    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).id === "containerBookingModal") close();
       };

    const [afterBooking, setAfterBooking] = useState<boolean>(false);
    
       useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () : void => {document.body.style.overflow = "unset"}
      }, [visible]);

      const image = forMen ? man : woman;

      const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
      } = useForm<DataForSubmit>({
        mode: "onBlur"
      });

      const onSubmit = (data: DataForSubmit) => {
        console.log(JSON.stringify(data));
        reset();
        setAfterBooking(true);
      }
    
      if(!visible) return null;
        return (
            <>
                <div 
                id="containerBookingModal"
                onClick={handleClose}
                className='fixed inset-0 bg-common-background bg-opacity-50 overflow-y-auto z-[10000] backdrop-blur-sm flex justify-center items-center'
                >
                    <div className='my-6 pb-[39px] max-w-[430px] border border-orange bg-common-background flex flex-col items-center gap-[24px] relative'>
                        <button onClick={() => close()} className='absolute top-5 right-5'><Image src={closeIcone} alt="close" width={0} height={0} className='w-[15px] h-[15px]'/></button>
                        <Image src={image} alt={forMen ? "man" : "woman"} sizes="vw" width={0} height={0} className='w-full max-h-[320px]'/>
                        {!afterBooking && <>
                          <h2 className='uppercase text-[24px] font-bold text-center'>отримайте 
                          безкоштовну консультацію</h2>
                          <p className='text-[16px]'>Залиште свої контактні дані</p>
                          <form onSubmit={handleSubmit(onSubmit)} autoComplete="true">
                              <div className='mb-[50px] flex flex-col gap-4'>
                                  <Input
                                      type="text"
                                      id="namePopUp"
                                      placeholder="Ім'я"
                                      name="namePopUp"
                                      register={register}
                                      errors={errors}
                                      errorText="Треба вказати ім'я"
                                  />
                                  <InputPhone
                                      control={control}
                                      name="phonePopUp"
                                      errors={errors}
                                      errorText="Номер вказан не вірно"
                                  />
                              </div>
                              <Button type="submit" className=''>Запис на консультацію</Button>
                          </form>
                        </>}
                        {afterBooking && <>
                          <h2 className='uppercase text-[20px] text-center font-bold'>Ваші дані надіслано</h2>
                          <p className='text-[12px]'>Наш менеджер зв'яжеться з вами найближчим часом</p>
                          <ButtonLink onClick={() => close()} link="/" className='border border-orange bg-transparent text-grey-light text-[16px] text-nowrap min-w-[217px] md:w-[304px]'>Повернутися на сайт</ButtonLink>
                        </>}
                    </div>
                </div>
        </>
        )
}

export default PopUpBanner
