'use client'

import {Feature} from "@/components/feature";
import {useEffect, useRef} from "react";
import Image from "next/image";

export function Features(){
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = document.querySelector('.features-container');
        if (!container) return;
        const handleWheel: EventListener = (event) => {
            const e = event as WheelEvent;
            e.preventDefault();
            container.scrollLeft += e.deltaY;
            updateCircles();
        };
        const updateCircles = () => {
            // Предполагается, что кружки - это реальные элементы с классом 'circle'
            const circles = container.querySelectorAll('.feature-circle');
            let firstVisibleCircleFound = false; // Флаг для отслеживания первого видимого кружка
            circles.forEach(circle => {
                if (!(circle instanceof HTMLElement)) return;

                // Получаем позиции кружка и контейнера
                const circleBounds = circle.getBoundingClientRect();
                const containerBounds = container.getBoundingClientRect();

                // Проверяем, является ли кружок первым видимым в области просмотра
                if (!firstVisibleCircleFound &&
                    circleBounds.left >= containerBounds.left &&
                    circleBounds.right <= containerBounds.right) {
                    // Этот кружок становится желтым и мы помечаем, что первый видимый кружок найден
                    circle.style.backgroundColor = "#D7A908"; // Желтый
                    firstVisibleCircleFound = true;
                } else {
                    // Все остальные кружки остаются серыми
                    circle.style.backgroundColor = "#EAEAEA";
                }
            });
        };
        updateCircles();

        const adjustContainerWidth = () => {
            const container = containerRef.current;
            if (container) {
                const features = Array.from(container.children) as HTMLDivElement[]; // Преобразуем HTMLCollection в массив
                 features[features.length-1].style.marginRight = `${wrapperRef.current?.offsetWidth ?? 1200}px`; // Устанавливаем ширину контейнера
            }
        };

        // Вызываем функцию при монтировании компонента
        adjustContainerWidth();

        // Опционально: Вызываем функцию при изменении размеров окна, если необходимо
        window.addEventListener('resize', adjustContainerWidth);
        // Добавляем обработчик события
        container.addEventListener('wheel', handleWheel, { passive: false });

        // Функция очистки
        return () => {
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('resize', adjustContainerWidth);
        };
    }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз после первого рендеринга

    return (
        <section>
            <div className="sectionBlock">
                <div ref={wrapperRef} className="withCircle">
                    <h2 className="text-4xl uppercase font-bold mb-8">5 причин<br/>
                        зробити завивку у нас</h2>
                    <h3 className="text-2xl">Не варто порівнювати нас з іншими салонами, і ось чому:</h3>

                    <div ref={containerRef} className="features-container overflow-hidden horizontal-scroll-container">
                            <Feature title="Ми спеціалізуємося на завивці з 2000 року" text="Для нас важлива репутація. Почитайте відгуки про нас у Google та на Facebook. Так, ми швидше відмовимо в завивці, ніж візьмемося за поганий результат. "/>
                            <Feature title="Здоров'я волосся" text="Ми знаємо десятки хитрощів як звести шкоду від завивки до мінімуму."/>
                            <Feature title="Все включено" text="В нашу ціну входить все, а саме: консультації, сама завивка, стрижка (якщо вона необхідна), укладання, навчання самостійного укладання, рекомендації щодо догляду та фарбування. "/>
                            <Feature title="Ми спеціалізуємося на завивці з 2000 року" text="Для нас важлива репутація. Почитайте відгуки про нас у Google та на Facebook. Так, ми швидше відмовимо в завивці, ніж візьмемося за поганий результат. "/>
                            <Feature title="Здоров'я волосся" text="Ми знаємо десятки хитрощів як звести шкоду від завивки до мінімуму."/>
                            <Feature title="Все включено" text="В нашу ціну входить все, а саме: консультації, сама завивка, стрижка (якщо вона необхідна), укладання, навчання самостійного укладання, рекомендації щодо догляду та фарбування. "/>
                    </div>
                </div>
            </div>
        </section>
    )
}
