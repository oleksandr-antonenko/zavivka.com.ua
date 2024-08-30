import React, { useEffect } from 'react';
import type {FC, MouseEvent} from 'react';
import Image from 'next/image';
import closeIcone from '@/shared/img/close.png';
import { ModalSliderProps } from './type';
import left from './img/left.png';
import right from './img/right.png'

const ModalSlider: FC<ModalSliderProps> = ({visible, close, photosMen, photosWomen, current, onclick, forMen=false}) => {
    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).id === "containerModalSlider") close();
       };

    const photos = forMen ? photosMen : photosWomen;   

    const previousSlide = () => {
        if(current === 0) onclick(photos.length - 1);
        else onclick(current - 1)
    };

    const nextSlide = () => {
        if(current === photos.length - 1) onclick(0);
        else onclick(current + 1)
    };
    
       useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () : void => {document.body.style.overflow = "unset"}
      }, [visible]);
    
      if(!visible) return null;
        return (
            <>
              <div 
                id="containerModalSlider"
                onClick={handleClose}
                className='fixed inset-0 bg-common-background bg-opacity-50 overflow-y-auto z-[10000] backdrop-blur-sm flex justify-center items-center'
              >
                    <div className='flex my-6 pb-[39px] rounded 2xl:w-[900px] 2xl:h-[900px] xl:w-[800px] xl:h-[800px] md:w-[630px] md:h-[630px] sm:w-[300px] sm:h-[300px] w-[240px] h-[240px] relative'>
                      <button onClick={() => close()} className='absolute z-30 md:top-[50px] top-[30px] right-5'><Image src={closeIcone} alt="close" width={0} height={0} className='w-[15px] h-[15px]'/></button>
                      <div className='flex overflow-hidden 2xl:w-[900px] 2xl:h-[900px] xl:w-[800px] xl:h-[800px] md:w-[630px] md:h-[630px] sm:w-[300px] sm:h-[300px] w-[240px] h-[240px] relative'>
                        {photos.map(photo => (
                            <div
                                key={photo}
                                className="2xl:min-w-[900px] 2xl:h-[900px] xl:min-w-[800px] xl:h-[800px] md:min-w-[630px] md:h-[630px] sm:min-w-[300px] sm:h-[300px] min-w-[240px] h-[240px] rounded"
                                style={{
                                    transform: `translate(-${current * 100}%)`,
                                }}
                            >
                                <Image
                                    src={photo}
                                    alt='example of works'
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                    className='w-full h-full rounded'/>
                            </div>
                        ))}                    
                        <div className={`cursor-pointer absolute top-0 h-full w-full justify-between items-center flex`}>
                          <button onClick={() => previousSlide()}>
                              <Image 
                                  src={left} 
                                  alt="left" 
                                  width={30} 
                                  height={30}/>
                            </button>
                            <button onClick={() => nextSlide()}>
                              <Image 
                                  src={right}
                                  alt="right" 
                                  width={30} 
                                  height={30}/>
                          </button>
                        </div>
                      </div> 
                    </div>
             </div>
             
        </>
        )
}

export default ModalSlider
