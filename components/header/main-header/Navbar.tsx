import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <ul className="flex justify-center gap-10 text-base uppercase">
                <li><Link href="/zavivka">Завивка</Link></li>
                <li><Link href="/haircut">Стрижка кучерів</Link></li>
                <li><Link href="/treatment">Лікування</Link></li>
                <li><Link href="/color">Фарбування</Link></li>
                <li><Link href="/team">Майстри</Link></li>
            </ul>
        </nav>
    )
}
