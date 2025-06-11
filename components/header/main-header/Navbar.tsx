'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavProp } from './type';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useLocale } from 'next-intl';
import { Link as I18nLink } from '@/i18n/routing';
import { useParams } from 'next/navigation';

const Navbar: FC<NavProp> = ({ show, navlinks, closeMobileMenu }) => {
  const pathname = usePathname();
  const locale = useParams().locale as string;

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
            ? 'flex-row gap-6 uppercase'
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
                : 'border-b border-grey py-[17px] px-5 mr-4 md:mr-[100px]'
            }`}
          >
            <I18nLink
              className={`inline-block hover:text-orange ${
                pathname === `/${locale}${link.linkNav}`
                  ? 'border-b border-orange text-orange'
                  : ''
              }`}
              href={link.linkNav}
              onClick={show !== 'nav-desktop' ? closeMobileMenu : undefined}
            >
              {link.titleNav}
            </I18nLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
