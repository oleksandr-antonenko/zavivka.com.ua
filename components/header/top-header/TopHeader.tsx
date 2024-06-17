'use client';
import GetButtonLang from './GetButtonLang';
import { useEffect, useState } from 'react';
import { country, latvia, topLinks, ukraine } from './constants';
import SelectCountry from './SelectCountry';
import { SocialIcons } from '@/shared/social';
import TopHeaderLinks from './TopHeaderLinks';
import { NavProps } from '../main-header';

export default function TopHeader({show="nav-desktop", navlinksTop=topLinks}: {show?: string, navlinksTop?: NavProps[]}) {
    
    const [choice, setChoice] = useState("ukraine");
    const [language, setLanguage] = useState<string[]>(ukraine);
    useEffect(() => {
        choice==="ukraine" ? setLanguage(ukraine) : setLanguage(latvia);
    }, [choice]);

    return (
        <div className={`text-xs mx-[100px] py-2 border-b-white border-b justify-between flex items-center max-w-[1440px] 2xl:mx-auto ${show === "nav-desktop" ? "flex-row" : "topHeaderMob"}`}>
                <div className="topHeaderMob-icons"><SocialIcons/></div>
                <TopHeaderLinks
                    show={show}
                    navlinksTop={navlinksTop}
                />
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
