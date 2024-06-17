import React from 'react';
import type {FC} from 'react';
import { ZavivkaChoice } from './types';
import Image from 'next/image';

const Photo: FC<ZavivkaChoice> = ({serviceImages, formen=false, currentHeight, currentCurl }) => {
  
  const allPics = serviceImages.images.map(images => images.images);
  const men = allPics.map(items => items.map(i => i.forMen));
  const women = allPics.map(items => items.map(i => i.forWomen));
  const allCurls = serviceImages.imagesCurl?.map(images => images.images);
  const menCurl = allCurls?.map(items => items.map(i => i.forMen));
  const womenCurl = allCurls?.map(items => items.map(item => item.forWomen));
  console.log(menCurl)
  const samePics = '';

  return (
    <div>
      {formen && !serviceImages.imagesCurl && men.map((ms, index) => ms.map(m => m.map(i => (<Image key={i} src={i} alt='man' sizes='100vw' height={0} width={0} className={`w-full ${currentHeight === index ? "block" : "hidden"}`}/>))))}
      {!formen && !serviceImages.imagesCurl && women.map((ms, index) => ms.map(m => m.map(i => (<Image key={i} src={i} alt='woman' sizes='100vw' height={0} width={0} className={`w-full ${currentHeight === index ? "block" : "hidden"}`}/>))))}
      {formen && serviceImages.imagesCurl && men.map((ms, index) => ms.map(m => m.map(i => (<Image key={i} src={i} alt='man' sizes='100vw' height={0} width={0} className={`w-full ${currentHeight === index ? "block" : "hidden"}`}/>))))}
      {!formen && serviceImages.imagesCurl && women.map((ms, index) => ms.map(m => m.map(i => (<Image key={i} src={i} alt='woman' sizes='100vw' height={0} width={0} className={`w-full ${currentHeight === index ? "block" : "hidden"}`}/>))))}
    </div>
  )
}

export default Photo;
