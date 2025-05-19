import { Header } from "@/components/header";
import React from "react";

export default function WomenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <Header/>
     {children}
    </>
  );
}
