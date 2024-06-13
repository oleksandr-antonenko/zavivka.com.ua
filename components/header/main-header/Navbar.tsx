import Link from "next/link";
import { usePathname } from 'next/navigation';
import { NavProp } from "./type";
import type {FC} from 'react';

const Navbar: FC<NavProp> = ({show, navlinks}) => {
    const pathname = usePathname();
    return (
        <nav>
            <ul className={`flex justify-center text-base ${show === "nav-desktop" ? "flex-row gap-10 uppercase" : "flex-col gap-0 capitalize"}`}>
                    {navlinks.map(link => (
                        <li 
                          key={link.linkNav} 
                          className={`${show === "nav-desktop" ? "" : "border-b-[0.5px] border-grey rounded-md py-[17px] mr-4 md:mr-[100px]"}`}
                        >
                            <Link 
                              className={`inline-block hover:font-bold mb-3 ${pathname === link.linkNav ? 'border-b font-bold border-orange' : ''}`} 
                              href={link.linkNav}
                            >{link.titleNav}</Link></li>
                    ))}
                </ul>
        </nav>
    )
}

export default Navbar;
