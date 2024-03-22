import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <ul className="flex-grow flex justify-center gap-10 text-base uppercase">
                <Link href="/zavivka">Завивка</Link>
                <Link href="/haircut">Стрижка кучерів</Link>
                <Link href="/treatment">Лікування</Link>
                <Link href="/color">Фарбування</Link>
                <Link href="/team">Майстри</Link>
            </ul>
        </nav>
    )
}
