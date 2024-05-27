"use client";

import Navbar from "@/components/header/main-header/Navbar";
import { Button } from "@/shared/buttons";
import { Logo } from "@/shared/svg";
import Image from "next/image";
import MobileIcon from './img/mobile-nav.png'
import { useState } from "react";


export default function MainHeader() {
  const [show, setShow] = useState("nav-desktop");
  const handleShow = () => {
    setShow(show === "nav-desktop" ? "nav-mobile" : "nav-desktop");
  }
  return (
    <div className="flex text-[16px] justify-between items-center py-[18px] md:py-5 mx-[100px] max-w-[1440px] 2xl:mx-auto">
      <Logo/>
      <div className="nav-desktop">
        <Navbar />
      </div>
      <a href="https://beautyprosoftware.com/b/877643" target='_blank'><Button className="bg-transparent rounded-md uppercase text-white text-[16px] border border-orange py-2 md:py-[10px]"> запис онлайн </Button></a>
      <Image src={MobileIcon} alt="mobile-button" width={48} height={31} className="mobile-icon" onClick={handleShow}/>
    </div>
  );
}
