import React from 'react';
import type {FC} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TopHeaderLinksProps } from './types';

const TopHeaderLinks: FC<TopHeaderLinksProps> = ({show, navlinksTop}) => {
    const pathname = usePathname();
  return (
    <ul className={`flex gap-10 ${show === "nav-desktop" ? "flex-row" : "topHeaderLinksBox"}`}>
        {navlinksTop.map(link => (
            <li 
              className={`${show === "nav-desktop" ? "" : "topHeader-links"}`}
              key={link.linkNav}
            >
                <Link 
                  href={link.linkNav}
                  className={`inline-block hover:font-bold ${pathname === link.linkNav ? 'border-b font-bold border-orange' : ''}`} 
                >{link.titleNav}</Link></li>
       ))}
    </ul>
  )
}

export default TopHeaderLinks
