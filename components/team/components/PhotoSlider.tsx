import React from 'react';
import type {FC} from 'react';
import { PhotoSliderProps } from './type';
import Image from 'next/image';

const PhotoSlider: FC<PhotoSliderProps> = ({photosMen, photosWomen, forMen=false, current, onclick, openSlider}) => {
  return (
    <>
        {forMen &&
          photosMen.map((photo, i) => (
            <div 
              key={photo}
              className="min-w-[260px] sm:w-[285px] h-[284px] cursor-pointer"
              onClick={() => {
                onclick(i);
                openSlider!(true)
              }
              }
              style={{
                transform: `translate(-${current * 70}%)`,
              }}
            >
                <Image
                  src={photo}
                  alt="men"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full rounded-[20px] h-full"
                />
              </div>
              
          ))
      }
        {!forMen && 
          photosWomen.map((photo, i) => (
           <div 
              key={photo}
              className="min-w-[200px] sm:min-w-[285px] h-[200px] sm:h-[284px] cursor-pointer"
              onClick={() => {
                onclick(i);
                openSlider!(true)
              }
              }
              style={{
                transform: `translate(-${current * 70}%)`,
              }}
         >
            <Image
                src={photo}
                alt="women"
                sizes="100vw"
                width={0}
                height={0}
                className="w-full h-full rounded-[20px]"
              />
          </div>
        ))}
      <div className="flex items-center justify-center gap-3 w-full absolute -bottom-10">
        {forMen && <>
          {photosMen.map((s, i) => {
            return (
              <div
                key={s}
                onClick={() => onclick(i)}
                className={`cursor-pointer rounded-full w-[15px] h-[15px] border ${i === current ? "bg-white border-white" : "bg-transparent border-orange"}`}
              ></div>
            );
          })}</>
        }

        {!forMen && <>
          {photosWomen.map((s, i) => {
            return (
              <div
                key={s}
                onClick={() => onclick(i)}
                className={`cursor-pointer rounded-full w-[15px] h-[15px] border ${i === current ? "bg-white border-white" : "bg-transparent border-orange"}`}
              ></div>
            );
          })}</>
        }
        </div>
    </>  
  )
}

export default PhotoSlider
