'use client';

import React, { useEffect, useState } from 'react';
import PopUpBanner from './PopUpBanner';

const IntervalPopUp = ({ forMen = false }: { forMen?: boolean }) => {
  const [show, setShow] = useState(false); // отвечает за рендер
  const [visible, setVisible] = useState(false); // отвечает за анимацию

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      setTimeout(() => setVisible(true), 50); // даем время на монтирование
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false); // запускаем exit анимацию
    setTimeout(() => setShow(false), 500); // удаляем через 500ms (должно совпадать с `exit`)
  };

  return (
    <>
      {show && (
        <PopUpBanner visible={visible} close={handleClose} forMen={forMen} />
      )}
    </>
  );
};

export default IntervalPopUp;
