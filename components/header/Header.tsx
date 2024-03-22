// components/header/Header.tsx

import TopHeader from "@/components/header/TopHeader/TopHeader";
import MainHeader from "@/components/header/MainHeader/MainHeader";

export default function Header() {
    return (
        <header className="px-100 relative">
            <TopHeader/>
            <MainHeader/>
        </header>
    );
}
