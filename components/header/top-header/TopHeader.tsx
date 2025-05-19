'use client';
import GetButtonLang from './GetButtonLang';
import { useEffect, useState } from 'react';
import { latvia, topLinks, ukraine } from './constants';
import { SocialIcons } from '@/shared/social';
import TopHeaderLinks from './TopHeaderLinks';
import { NavProps } from '../main-header';

export default function TopHeader({
  show = 'nav-desktop',
  navlinksTop = topLinks,
}: {
  show?: string;
  navlinksTop?: NavProps[];
}) {
  const [choice, setChoice] = useState('ukraine');
  const [language, setLanguage] = useState<string[]>(ukraine);
  useEffect(() => {
    choice === 'ukraine' ? setLanguage(ukraine) : setLanguage(latvia);
  }, [choice]);

  return (
    <div
      className={`text-xs p-2  border-b-white border-b justify-between flex items-center w-full max-w-[1720px] mx-auto ${show === 'nav-desktop' ? 'flex-row' : 'topHeaderMob'}`}
    >
      <div className="">
        <SocialIcons />
      </div>
      <TopHeaderLinks show={show} navlinksTop={navlinksTop} />
      <div
        className={`flex items-center ${show === 'nav-desktop' ? 'justify-center' : 'topHeader-links'}`}
      >
        <div className={`flex divide-x divide-grey`}>
          <GetButtonLang />
        </div>
      </div>
    </div>
  );
}
