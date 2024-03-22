import Image from "next/image";

export function MainBanner(){
    return(
        <section className="w-full py-">
            <div className="mainBanner absolute w-full">
                <Image src="/images/ai-banner.jpg" alt="Background Image" className="object-cover object-center" fill />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="content">
                    <div className="relative z-10">
                        <h1 className="text-7xl leading-tight mb-4 font-bold">Завивка <br/>волосся в Києві</h1>
                        <p className="text-2xl text-gray-300 mb-8">Спеціалізований салон краси.<br/>
                            Ми зберігаємо здоров`я волосся та <br/>
                            полегшуємо повсякденний догляд.</p>
                        <a href="#" className="button py-2 px-6 rounded-full
                      text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Жінки</a>
                        <a href="#" className="button py-2 px-6 rounded-full
                      text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Чоловіки</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
