import React from 'react';
import type { FC } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { TopHeaderLinksProps } from './types';

const TopHeaderLinks: FC<TopHeaderLinksProps> = ({ show, navlinksTop }) => {
  const pathname = usePathname();
  const locale = useParams().locale as string;

  return (
    <ul
      className={`flex gap-10 ${show === 'nav-desktop' ? 'flex-row' : 'topHeaderLinksBox'}`}
    >
      {navlinksTop.map((link) => (
        <li
          className={`${show === 'nav-desktop' ? '' : 'topHeader-links'}`}
          key={link.id}
        >
          <Link
            href={link.linkNav}
            className={`inline-block hover:text-orange ${pathname === `/${locale}${link.linkNav}` ? 'border-b font-bold border-orange' : ''}`}
          >
            {link.titleNav}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopHeaderLinks;
