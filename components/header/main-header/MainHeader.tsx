"use client";

import Navbar from "@/components/header/main-header/Navbar";
import { Button } from "@/shared/buttons";
import { Logo } from "@/shared/svg";
import Image from "next/image";
import MobileIcon from './img/mobile-nav.png';
import { useState } from "react";
import { TopHeader } from "../top-header";


const MainHeader= () => {
  const [show, setShow] = useState("nav-desktop");
  const handleShow = () => {
    setShow(show === "nav-desktop" ? "nav-mobile" : "nav-desktop");
  }
  return (
    <div className="flex text-[16px] justify-between items-center py-[18px] md:py-5 mx-4 md:mx-[100px] max-w-[1440px] 2xl:mx-auto">
      <div className="headerLogo"><Logo/></div>
      <div className="hidden headerLogoMob">
        <Logo 
          width="118"
          height="40"
        />
      </div>
      <div className={show}>
        <Navbar show={show} />
        <div className="hidden topHeaderMob">
          <TopHeader show={show}/>
        </div>
      </div>
      <a href="https://beautyprosoftware.com/b/877643" target='_blank'><Button className="bg-transparent rounded-md uppercase text-white text-[12px] md:text-[16px] border border-orange py-2 md:py-[10px] md:px-5 w-[119px] md:w-[171px] sm:text-nowrap"> запис онлайн </Button></a>
      <Image src={MobileIcon} alt="mobile-button" width={48} height={31} className="mobile-icon" onClick={handleShow}/>
    </div>
  );
}

export default MainHeader;
