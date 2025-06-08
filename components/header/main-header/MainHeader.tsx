'use client';

import { Button } from '@/shared/buttons';
import { Logo } from '@/shared/svg';
import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';
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
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  const toggleMenu = () => {
    const newShow = show === 'nav-desktop' ? 'nav-mobile' : 'nav-desktop';
    setShow(newShow);
    setOpen(newShow === 'nav-mobile');
  };

  return (
    <div className="flex xlOne:flex-col xlOne:gap-4 2xl:flex-row 2xl:gap-4 text-[16px] justify-between items-center px-2 py-[18px] md:py-5 extraSm:mx-0 sm:mx-4 max-w-[1720px] 2xl:mx-auto">
      <div className="headerLogo">
        <Logo />
      </div>
      <div className="hidden headerLogoMob">
        <Logo width="118" height="40" />
      </div>

      {/* Анимируем только контейнер меню */}
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
            closeMobileMenu={() => {
              setShow('nav-desktop');
              setOpen(false);
            }}
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
        animate={{ x: [0, -3, 3, -3, 3, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
      >
        <Button className="px-[8px] py-1 h-[21px] flex justify-center items-center bg-transparent rounded-md text-white text-[16px] border border-orange sm:text-nowrap">
          запис онлайн
        </Button>
      </motion.a>

      {/* 🍔 Кастомный бургер */}
      <div className="block xlOne:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          color="#D7A908"
          size={24}
          rounded
          duration={0.4}
          distance="sm"
        />
      </div>
    </div>
  );
};

export default MainHeader;
