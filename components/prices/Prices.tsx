"use client";

import Image from "next/image";
import { ReactElement, useEffect } from "react";

type Price = {
  name: string;
  description: ReactElement;
  image: string;
  video?: string;
  priceExpert: number;
  priceArtDir: number;
  priceTop: number;
};
export function Prices() {
  const servicePrices: Price[] = [
    {
      name: "Біозавивка волосся",
      description: (
        <>
          Все включено: <br />
          консультація, <br />
          стрижка, <br />
          укладання <br />
          рекомендації щодо догляду
          <br />
          підбір засобів догляду
        </>
      ),
      image: "/images/services/zavivka.jpg",
      video: "videos/services/zavivka.mp4",
      priceExpert: 3950,
      priceArtDir: 4500,
      priceTop: 5000,
    },
    {
      name: "Карвінг",
      description: (
        <>
          Все включено: <br />
          консультація, <br />
          стрижка, <br />
          укладання <br />
          рекомендації щодо догляду
          <br />
          підбір засобів догляду
        </>
      ),
      image: "/images/services/zavivka.jpg",
      priceExpert: 3950,
      priceArtDir: 4500,
      priceTop: 5000,
    },
    {
      name: "Лікуваня волосся",
      description: (
        <>
          Все включено: <br />
          консультація, <br />
          стрижка, <br />
          укладання <br />
          рекомендації щодо догляду
          <br />
          підбір засобів догляду
        </>
      ),
      image: "/images/services/zavivka.jpg",
      priceExpert: 3950,
      priceArtDir: 4500,
      priceTop: 5000,
    },
    {
      name: "Стрижка кучерявого волосся",
      description: (
        <>
          Все включено: <br />
          консультація, <br />
          стрижка, <br />
          укладання <br />
          рекомендації щодо догляду
          <br />
          підбір засобів догляду
        </>
      ),
      image: "/images/services/zavivka.jpg",
      priceExpert: 3950,
      priceArtDir: 4500,
      priceTop: 5000,
    },
    {
      name: "Фарбуання волосся",
      description: (
        <>
          Все включено: <br />
          консультація, <br />
          стрижка, <br />
          укладання <br />
          рекомендації щодо догляду
          <br />
          підбір засобів догляду
        </>
      ),
      image: "/images/services/zavivka.jpg",
      priceExpert: 3950,
      priceArtDir: 4500,
      priceTop: 5000,
    },
    {
      name: "Подарунковий сертифікат",
      description: (
        <>
          Все включено: <br />
          консультація, <br />
          стрижка, <br />
          укладання <br />
          рекомендації щодо догляду
          <br />
          підбір засобів догляду
        </>
      ),
      image: "/images/services/zavivka.jpg",
      priceExpert: 3950,
      priceArtDir: 4500,
      priceTop: 5000,
    },
  ];
  useEffect(() => {
    const items = document.querySelectorAll(".service-list li");
    function clearActiveTab() {
      items.forEach((item) => item.classList.remove("active"));
    }
    items.forEach((item) => {
      item.addEventListener("click", () => {
        clearActiveTab();
        item.classList.add("active");
        const targetId = item.getAttribute("data-target");
        document
          .querySelectorAll(".service-price-description")
          .forEach((detail) => {
            if (detail.id === targetId) {
              detail.classList.add("active");
            } else {
              detail.classList.remove("active");
            }
          });
      });
    });
  }, []);
  return (
    <section>
      <div className="prices section-block">
        <div className="with-circle">
          <div className="section-header">
            <h2>Ціни</h2>
            <h3>
              Нижче наведено прайс з цінами на наші послуги.
              <br />
              Точніше Вас зорієнтує наш адміністратор після того, як ви залишите
              заявку.
            </h3>
          </div>
        </div>
        <div className="prices-body">
          <ul className="service-list">
            {servicePrices.map((service, index) => (
              <li
                key={`service-name-${index}`}
                data-target={`service-${index}`}
                className={index === 0 ? "active" : ""}
              >
                {service.name}
              </li>
            ))}
          </ul>
          <div className="service-details">
            {servicePrices.map((service, index) => (
              <div
                id={`service-${index}`}
                key={`service-${index}`}
                className={
                  "service-price-description " + (index === 0 ? "active" : "")
                }
              >
                <div className="description">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={250}
                    height={250}
                  />
                  <div className="description-text">
                    <p className="font-bold mb-2.5">{service.name}</p>
                    <p>{service.description}</p>
                  </div>
                </div>
                <ul className="category-prices">
                  <li>
                    <h6>Експерт</h6>
                    <p>{service.priceExpert} грн</p>
                  </li>
                  <li>
                    <h6>Арт-директор</h6>
                    <p>{service.priceArtDir} грн</p>
                  </li>
                  <li>
                    <h6>Топ Майстер</h6>
                    <p>{service.priceTop} грн</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
