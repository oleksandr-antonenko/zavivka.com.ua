"use client";

import { useAppSelector } from '@/store/hook';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import MemberService from './components/MemberService';
import PhotoSlider from './components/PhotoSlider';
import OrderBlock from './components/OrderBlock';

const MemberFullInfo = ({forMen=false}: {forMen?: boolean}) => {
  const memberOfTeam = useAppSelector(state => state.team.member)!;
  const [currentChoice, setCurrentChoice] = useState<number | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);

  const carouselScroll = () => {
    if(currentPhoto === (memberOfTeam?.imagesOfWorksForWomen.length - 1) || currentPhoto === (memberOfTeam?.imagesOfWorksForMen.length - 1)){
      return setCurrentPhoto(0)
    }
    return setCurrentPhoto(currentPhoto + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselScroll()}, 3000);
    return () => clearInterval(interval);
  })

  return (
    <section className='containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[50px] relative'>
      <div className='rounded-full -right-[300px] sm:-right-[200px] -top-[2px] w-[500px] h-[500px] md:w-[580px] md:h-[580px] xl:w-[600px] xl:h-[600px] absolute -z-10 bg-grey-middle'></div>
      {memberOfTeam && <>
        <div className="flex flex-col md:flex-row mb-[200px] items-start gap-[100px]">
          <div className='w-full md:w-1/2'>
            <Image src={memberOfTeam.photo} alt={memberOfTeam.name} sizes="100vw" width={0} height={0} className='w-full'/>
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className="font-bold uppercase mb-[30px] md:mb-[60px]">{memberOfTeam.name}</h2>
            <p className='text-[16px] flex justify-between max-w-[200px] mb-9'>Категорія: <span className='text-orange font-bold'>{memberOfTeam.category}</span></p>
            <p className='text-[16px] flex justify-between max-w-[200px] mb-[64px]'>Досвід <span className='font-bold w-1/2 text-start'>{memberOfTeam.experience}</span></p>
            <MemberService
              servicePrices={memberOfTeam.listOfService}
              onClick={setCurrentChoice}
              currentChoice={currentChoice}
            />
          </div>
        </div>
        <div className='relative mb-[150px]'>
          <div className='rounded-full left-0 -top-[60px] md:w-[95px] w-[60px] h-[60px] md:h-[95px] absolute -z-5 bg-yellow'></div>
          <div className='rounded-full -left-[300px] md:-left-[350px] xl:-left-[400px] -top-[40px] w-[500px] h-[500px] md:w-[580px] md:h-[580px] xl:w-[600px] xl:h-[600px] absolute -z-10 bg-grey-middle'></div>
          <h2 className="font-bold text-center uppercase mb-[30px] md:mb-[60px]">Роботи майстра</h2>
          <div className="flex gap-5 overflow-hidden">
            <PhotoSlider
              photosMen={memberOfTeam.imagesOfWorksForMen}
              photosWomen={memberOfTeam.imagesOfWorksForWomen}
              current={currentPhoto}
              onclick={setCurrentPhoto}
              forMen={forMen}
            />
          </div>
        </div>
        <OrderBlock/>
      </>}
    </section>
  )
}

export default MemberFullInfo;
