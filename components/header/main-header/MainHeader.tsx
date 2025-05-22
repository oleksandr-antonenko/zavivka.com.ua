'use client';

import { Button } from '@/shared/buttons';
import { Logo } from '@/shared/svg';
import Image from 'next/image';
import MobileIcon from './img/mobile-nav.png';
import { useState } from 'react';
import { TopHeader } from '../top-header';
import Navbar from './Navbar';
import { NavProps } from './type';
import { womenNav } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const MainHeader = ({
  navlinks = womenNav,
  navlinksTop,
}: {
  navlinks?: NavProps[];
  navlinksTop?: NavProps[];
}) => {
  const [show, setShow] = useState<'nav-desktop' | 'nav-mobile'>('nav-desktop');
  const handleShow = () => {
    setShow(show === 'nav-desktop' ? 'nav-mobile' : 'nav-desktop');
  };

  return (
    <div className="flex text-[16px] justify-between items-center py-[18px] md:py-5 extraSm:mx-0 sm:mx-4 md:mx-[100px] max-w-[1440px] 2xl:mx-auto">
      <div className="headerLogo">
        <Logo />
      </div>
      <div className="hidden headerLogoMob">
        <Logo width="118" height="40" />
      </div>

      {/* Анимируем только контейнер меню, сохраняя классы */}
      <AnimatePresence mode="wait">
        <motion.div
          key={show}
          className={show}
          initial={{ x: show === 'nav-mobile' ? '100%' : 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: show === 'nav-mobile' ? '100%' : 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navbar
            show={show}
            navlinks={navlinks}
            closeMobileMenu={() => setShow('nav-desktop')}
          />
          <div className="hidden topHeaderMob">
            <TopHeader show={show} navlinksTop={navlinksTop} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 🔔 Анимированная кнопка */}
      <motion.a
        href="https://beautyprosoftware.com/b/877643"
        target="_blank"
        animate={{
          x: [0, -3, 3, -3, 3, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      >
        <Button className="px-[8px] py-1 h-[21px] flex justify-center items-center bg-transparent rounded-md text-white text-[16px] border border-orange sm:text-nowrap">
          запис онлайн
        </Button>
      </motion.a>

      {/* Кнопка открытия/закрытия меню */}
      <Image
        src={MobileIcon}
        alt="mobile-button"
        width={0}
        height={0}
        className="mobile-icon w-12 h-[31px] cursor-pointer"
        onClick={handleShow}
      />
    </div>
  );
};

export default MainHeader;
