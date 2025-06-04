'use client';
import React, { useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import closeIcone from '@/shared/img/close.png';
import man from './img/man.jpg';
import woman from './img/banner.jpg';
import { PopUpProps } from './type';
import { Input } from '@/shared/input';
import { useForm } from 'react-hook-form';
import { DataForSubmit } from '../booking';

const backdropVariants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const popupVariants = {
  hidden: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const PopUpBanner: React.FC<PopUpProps> = ({
  visible,
  close,
  forMen = false,
}) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'containerBookingModal') close();
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  const image = forMen ? man : woman;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataForSubmit>({ mode: 'onBlur' });

  const onSubmit = (data: DataForSubmit) => {
    console.log(JSON.stringify(data));
    reset();
    close();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="containerBookingModal"
          onClick={handleClose}
          className="fixed inset-0 px-2 bg-common-background bg-opacity-50 overflow-y-auto z-[20000] backdrop-blur-sm flex justify-center items-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden" // <-- exit с длительностью из variants
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <motion.div
            className="rounded-[14px] overflow-hidden my-6 pb-[39px] max-w-[430px] border border-orange bg-common-background flex flex-col items-center gap-[24px] relative"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => close()} className="absolute top-5 right-5">
              <Image
                src={closeIcone}
                alt="close"
                width={15}
                height={15}
                className="w-[15px] h-[15px]"
              />
            </button>
            <Image
              src={image}
              alt={forMen ? 'man' : 'woman'}
              sizes="100vw"
              width={430}
              height={320}
              className="w-full max-h-[320px]"
            />
            <h2 className="uppercase text-[24px] font-bold text-center">
              отримайте безкоштовну консультацію
            </h2>
            <p className="text-[16px]">Залиште свої контактні дані</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="true"
              className="w-full flex flex-col items-center"
            >
              <div className="mb-[50px] flex flex-col items-center gap-6">
                <Input
                  type="text"
                  id="namePopUp"
                  placeholder="Ім'я"
                  name="namePopUp"
                  register={register}
                  errors={errors}
                  errorText="Треба вказати ім'я"
                />
                <Input
                  type="tel"
                  id="phonePopUp"
                  placeholder="+380674413565"
                  name="phonePopUp"
                  register={register}
                  errors={errors}
                  errorText="Номер вказан не вірно"
                  lengthMin={6}
                  lengthMax={13}
                />
              </div>
              <button
                type="submit"
                className="w-full max-w-[250px] px-2 rounded-[40px] h-[50px] flex justify-center items-center text-[#212121] text-[20px] mx-auto md:mx-0 transition duration-300 bg-[#D7A908] hover:bg-[#f8cf38]"
              >
                Запис на консультацію
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUpBanner;
