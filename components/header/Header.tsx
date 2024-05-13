// components/header/Header.tsx

import TopHeader from "@/components/header/top-header/top-header";
import MainHeader from "@/components/header/main-header/main-header";

export default function Header() {
  return (
    <header className="px-100 relative">
      <TopHeader />
      <MainHeader />
    </header>
  );
}
