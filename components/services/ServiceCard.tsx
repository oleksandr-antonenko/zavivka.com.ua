"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ServiceListProps } from "./types";
import type {FC} from 'react';
import Link from "next/link";


const ServiceCard: FC<ServiceListProps> = ({services}) => {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const playScroll = () => {
    if(currentVideo === services.length - 1){
      return setCurrentVideo(0)
    }
    return setCurrentVideo(currentVideo + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {playScroll()}, 7000);
    return () => clearInterval(interval);
  })

  return (
   <>
   {services.map((service, i) => (            
    <Link 
      href={service.url}
      className="relative"
      key={service.name}
    >
      <div className="group" >
        <Image
          src={`/images/services/${service.image}`}
          alt={service.name}
          className={`w-full h-[166px] md:h-[284px] rounded-[20px] group-hover:hidden ${i === currentVideo ? "hidden md:block" : "block"}`}
          sizes="100vw"
          width={0}
          height={0}
        />
        <video
          className={`w-full h-[166px] md:h-[284px] object-cover rounded-[20px] group-hover:block ${i === currentVideo ? "block md:hidden" : "hidden"}`}
          loop
          muted
          autoPlay
          playsInline
        >
          <source src={`/videos/services/${service.video}`} type="video/mp4" />
          Ваш браузер не поддерживает видео тег.
        </video>
      </div>
      <div className="absolute font-medium sm:font-bold extraSm:text-[14px] sm:text-[16px] left-2 md:left-[30px] bottom-[15px] uppercase">{service.name}</div>
    </Link>
   ))}
   </> 
  );
}

export default ServiceCard;
