"use client";

import React, { useEffect, useState } from 'react'
import PopUpBanner from './PopUpBanner';

const IntervalPopUp = ({forMen=false}: {forMen?: boolean}) => {
    
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const handleClose = () => {
        setOpenModal(false);
    }

    const timer = setTimeout(() => {setOpenModal(true), setCount(1)}, 10000);
    if (count === 1) clearTimeout(timer);

  return (
    <>
        {openModal && <PopUpBanner 
            visible={openModal} 
            close={handleClose}
            forMen={forMen}
        />}
    </>
  )
}

export default IntervalPopUp
