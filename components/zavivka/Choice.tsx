import React from 'react';
import type {FC} from 'react';
import { ZavivkaChoice } from './types';

const Choice: FC<ZavivkaChoice> = ({serviceImages, currentHeight, currentCurl, onClickHeight, onClickCurl}) => {
  return (
    <div>
    <div>
        <h4>Довжина волосся</h4>
        {serviceImages.images.map((item, index) => (
          <p 
            key={item.imageTitle}
            onClick={() => onClickHeight && onClickHeight(index)}
            className='cursor-pointer'
          >{item.imageTitle}</p>
          ))}
    </div>
   {serviceImages.imagesCurl && (
   <div>
        <h4>Розмір завитка</h4>
        {serviceImages.imagesCurl.map((item, index) => (
          <p 
            key={item.imageTitle}
            onClick={() => onClickCurl && onClickCurl(index)}
          >{item.imageTitle}</p>
      ))}
    </div>)}
      
    </div>
  )
}

export default Choice
