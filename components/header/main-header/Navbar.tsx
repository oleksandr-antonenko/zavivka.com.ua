'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavProp } from './type';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Navbar: FC<NavProp> = ({ show, navlinks, closeMobileMenu }) => {
  const pathname = usePathname();

  // Анимации для разных направлений
  const getVariants = (index: number) => {
    const directions = ['-100', '-50', '50', '100']; // влево, немного влево, немного вправо, вправо
    const dir = directions[index % directions.length];
    return {
      hidden: { opacity: 0, x: Number(dir) },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.15,
          type: 'spring',
          stiffness: 120,
          damping: 20,
        },
      },
    };
  };

  return (
    <nav>
      <ul
        className={`flex justify-center text-base ${
          show === 'nav-desktop'
            ? 'flex-row gap-10 uppercase'
            : 'flex-col gap-0 capitalize'
        }`}
      >
        {navlinks.map((link, index) => (
          <motion.li
            key={link.linkNav}
            initial="hidden"
            animate="visible"
            variants={getVariants(index)}
            whileHover={{ scale: 1.05 }}
            className={`${
              show === 'nav-desktop'
                ? ''
                : 'border-b-[0.5px] border-grey rounded-md py-[17px] px-5 mr-4 md:mr-[100px]'
            }`}
          >
            <Link
              className={`inline-block hover:text-orange ${
                pathname === link.linkNav
                  ? 'border-b font-bold border-orange'
                  : ''
              }`}
              href={link.linkNav}
              onClick={show !== 'nav-desktop' ? closeMobileMenu : undefined}
            >
              {link.titleNav}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
