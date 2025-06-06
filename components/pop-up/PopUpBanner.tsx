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
import { sendForm } from '@/app/action/sendEmailAction';

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
    if ((e.target as HTMLDivElement).id === 'containerBookingModal') {
      close();
    }
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
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<DataForSubmit>({ mode: 'onBlur' });

  const onSubmit = async (data: DataForSubmit) => {
    try {
      const result = await sendForm(data);

      if (result.success) {
        reset();
        close();
      } else {
        setError('root', { message: result.message });
      }
    } catch (err) {
      setError('root', {
        message: 'Помилка при відправці заявки. Спробуйте пізніше.',
      });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="containerBookingModal"
          onClick={handleClose}
          className="fixed inset-0 px-2 bg-common-background bg-opacity-50 overflow-y-auto z-[10000] backdrop-blur-sm flex justify-center items-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
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
                disabled={isSubmitting}
                className="w-full max-w-[250px] px-2 rounded-[40px] h-[50px] flex justify-center items-center text-[#212121] text-[20px] mx-auto md:mx-0 transition duration-300 bg-[#D7A908] hover:bg-[#f8cf38] disabled:opacity-50"
              >
                {isSubmitting ? 'Відправка...' : 'Запис на консультацію'}
              </button>
              {errors.root?.message && (
                <div className="text-center text-[14px] mt-4 w-full max-w-[400px] mx-auto p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                  {errors.root.message}
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUpBanner;
