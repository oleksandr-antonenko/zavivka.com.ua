import Link from "next/link";

export default function Navbar({show}: {show: string}){
    return (
        <nav>
            <ul className={`flex justify-center text-base ${show === "nav-desktop" ? "flex-row gap-10 uppercase" : "flex-col gap-0 capitalize"}`}>
                    <li className={`${show === "nav-desktop" ? "" : "border-b-[0.5px] border-grey rounded-md py-[17px] mr-4 md:mr-[100px]"}`}><Link href="/zavivka">Завивка</Link></li>
                    <li className={`${show === "nav-desktop" ? "" : "border-b-[0.5px] border-grey rounded-md py-[17px] mr-4 md:mr-[100px]"}`}><Link href="/haircut">Стрижка кучерів</Link></li>
                    <li className={`${show === "nav-desktop" ? "" : "border-b-[0.5px] border-grey rounded-md py-[17px] mr-4 md:mr-[100px]"}`}><Link href="/treatment">Лікування</Link></li>
                    <li className={`${show === "nav-desktop" ? "" : "border-b-[0.5px] border-grey rounded-md py-[17px] mr-4 md:mr-[100px]"}`}><Link href="/color">Фарбування</Link></li>
                    <li className={`${show === "nav-desktop" ? "" : "border-b-[0.5px] border-grey rounded-md py-[17px] mr-4 md:mr-[100px]"}`}><Link href="/team">Майстри</Link></li>
                </ul>
        </nav>
    )
}
