import React from 'react';
import type {FC} from 'react';
import { ZavivkaChoice } from './types';
import Image from 'next/image';

const Photo: FC<ZavivkaChoice> = ({serviceImages, formen=false, currentHeight, currentCurl }) => {
  return (
    <div>
      {!serviceImages.imagesCurl && serviceImages.images.map((ms, index) => ms.images.map(i => (<Image key={i} src={i} alt={`${formen ? 'man': 'woman'}`} sizes='100vw' height={0} width={0} className={`w-full ${currentHeight === index ? "block" : "hidden"}`}/>)))}
      {serviceImages.imagesCurl && serviceImages.imagesCurl.map((ms, index) => ms.images.map(i => (<Image key={i} src={i} alt={`${formen ? 'man': 'woman'}`} sizes='100vw' height={0} width={0} className={`w-full ${currentHeight === index ? "block" : "hidden"}`}/>)))}
    </div>
  )
}

export default Photo;
