import { Header } from "@/components/header";
import { menNav } from "@/components/header/main-header";
import React from "react";

export default function MenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <Header navlinks={menNav}/>
     {children}
    </>
  );
}
