'use client';
import Link from 'next/link';
import GetButtonLang from './GetButtonLang';
import { useEffect, useState } from 'react';
import { country, latvia, ukraine } from './constants';
import SelectCountry from './SelectCountry';
import { SocialIcons } from '@/shared/social';

export default function TopHeader({show}: {show?: string}) {
    
    const [choice, setChoice] = useState("ukraine");
    const [language, setLanguage] = useState<string[]>(ukraine);
    useEffect(() => {
        choice==="ukraine" ? setLanguage(ukraine) : setLanguage(latvia);
    }, [choice]);

    return (
        <div className={`text-xs mx-[100px] py-2 border-b-white border-b justify-between flex items-center max-w-[1440px] 2xl:mx-auto ${show === "nav-desktop" ? "flex-row" : "topHeaderMob"}`}>
                <div className="topHeaderMob-icons"><SocialIcons/></div>
                <ul className={`flex gap-10 ${show === "nav-desktop" ? "flex-row" : "topHeaderLinksBox"}`}>
                    <li className={`${show === "nav-desktop" ? "" : "topHeader-links"}`}><Link href='/education'>Навчання</Link></li>
                    <li className={`${show === "nav-desktop" ? "" : "topHeader-links"}`}><Link href='/shop'>Інтернет-магазин</Link></li>
                    <li className={`${show === "nav-desktop" ? "" : "topHeader-links"}`}><Link href='/contacts'>Контакти</Link></li>
                </ul>
                <div className={`flex items-center ${show === "nav-desktop" ? "justify-center" : "topHeader-links"}`}>
                    <SelectCountry 
                        countries={country}
                        name="country"
                        onChangeProps={setChoice}
                        choice={choice}
                    />
                    <div className={`flex divide-x divide-grey`}>
                        <GetButtonLang languages={language}/>
                    </div>
                </div>
        </div>
    );
}
