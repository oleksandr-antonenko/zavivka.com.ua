"use client";

import { Feature } from "@/components/feature/Feature";
import { useEffect, useRef } from "react";

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = wrapperRef.current;
    const container = containerRef.current;
    if (!container || !section) return;

    const handleContainerScroll = (e: WheelEvent) => {
      e.preventDefault();
      // container.scrollLeft += +e.deltaY;
      container.scroll({
        left: container.scrollLeft + 385,
        behavior: "smooth",
      });
      updateCircles();
    };
    const updateCircles = () => {
      if (!container) return;

      const circles = container.querySelectorAll(".feature-circle");
      let firstCircleVisible = false;
      circles.forEach((circle, index) => {
        if (!(circle instanceof HTMLElement)) return;

        const circleBounds = circle.getBoundingClientRect();
        const containerBounds = container.getBoundingClientRect();

        if (
          !firstCircleVisible &&
          circleBounds.left >= containerBounds.left &&
          circleBounds.right <= containerBounds.right
        ) {
          circle.style.backgroundColor = "#D7A908"; // Желтый
          firstCircleVisible = true;
          // Активируем прокрутку внутри контейнера после того, как первый кружок стал желтым
          if (index === 0) {
            window.addEventListener("wheel", handleContainerScroll, {
              passive: false,
            });
          }
          if (index === circles.length - 1) {
            // Последний кружок стал желтым, деактивируем прокрутку внутри контейнера
            window.removeEventListener("wheel", handleContainerScroll);
          }
        } else {
          circle.style.backgroundColor = "#EAEAEA"; // Серый
        }
      });
    };

    const handlePageScroll = () => {
      const { top, bottom } = section.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const isVisible = top < screenHeight && bottom > 0; // Контейнер частично или полностью виден
      const isTopAboveMiddle = top < screenHeight / 2; // Верх контейнера выше середины экрана
      const isBottomBelowMiddle = bottom > screenHeight / 2; // Низ контейнера ниже середины экрана

      // Активируем прокрутку внутри features-container, если он виден и его верх или низ проходят через середину экрана
      if (isVisible && isTopAboveMiddle && isBottomBelowMiddle) {
        updateCircles();
      }
    };
    window.addEventListener("scroll", handlePageScroll);

    // Восстановление функции корректировки ширины контейнера
    const adjustContainerWidth = () => {
      const container = containerRef.current;
      if (!container) return;

      const features = Array.from(container.children) as HTMLDivElement[];
      features[features.length - 1].style.marginRight =
        `${window.innerWidth}px`;
    };

    // Инициализация и добавление обработчиков событий
    adjustContainerWidth();
    window.addEventListener("resize", adjustContainerWidth);

    // Очистка
    return () => {
      window.removeEventListener("resize", adjustContainerWidth);
      window.removeEventListener("scroll", handlePageScroll);
      window.removeEventListener("wheel", handleContainerScroll);
    };
  }, []); // Зависимости useEffect

  return (
    <section>
      <div className="section-block">
        <div ref={wrapperRef} className="with-circle">
          <div className="section-header">
            <h2>
              5 причин
              <br />
              зробити завивку у нас
            </h2>
            <h3>Не варто порівнювати нас з іншими салонами, і ось чому:</h3>
          </div>
          <div
            ref={containerRef}
            className="features-container overflow-hidden horizontal-scroll-container"
          >
            <Feature
              title="Ми спеціалізуємося на завивці з 2000 року"
              text="Для нас важлива репутація. Почитайте відгуки про нас у Google та на Facebook. Так, ми швидше відмовимо в завивці, ніж візьмемося за поганий результат. "
            />
            <Feature
              title="Здоров'я волосся"
              text="Ми знаємо десятки хитрощів як звести шкоду від завивки до мінімуму."
            />
            <Feature
              title="Все включено"
              text="В нашу ціну входить все, а саме: консультації, сама завивка, стрижка (якщо вона необхідна), укладання, навчання самостійного укладання, рекомендації щодо догляду та фарбування. "
            />
            <Feature
              title="Ми спеціалізуємося на завивці з 2000 року"
              text="Для нас важлива репутація. Почитайте відгуки про нас у Google та на Facebook. Так, ми швидше відмовимо в завивці, ніж візьмемося за поганий результат. "
            />
            <Feature
              title="Здоров'я волосся"
              text="Ми знаємо десятки хитрощів як звести шкоду від завивки до мінімуму."
            />
            <Feature
              title="Все включено"
              text="В нашу ціну входить все, а саме: консультації, сама завивка, стрижка (якщо вона необхідна), укладання, навчання самостійного укладання, рекомендації щодо догляду та фарбування. "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
