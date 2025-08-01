import { createSlice, UnknownAction, PayloadAction } from "@reduxjs/toolkit";
import { TeamState } from "./type";
import { getMasterExperience } from "@/lib/experience";

const setError = (action: UnknownAction) => {
  return action.type.endsWith("rejected");
};

const initialState: TeamState = {
  listOfTeam: [
    {
      id: "1",
      name: "Валентина Антоненко",
      slug: "valentina-antonenko",
      category: "Директор",
      experience: getMasterExperience("Валентина Антоненко"),
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 8500,
        },
        {
          id: "02",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 8500,
        },
        {
          id: "03",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 8500,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 3000,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 3000,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 8500,
        },
      ],
      imagesOfWorksForMen: [
        "/images/men.png",
        "/images/menmiddle.jpg",
        "/images/menforsholders.jpg",
        "/images/menlong.jpg",
      ],
      imagesOfWorksForWomen: [
        "/images/valentina/valentina-1.webp",
        "/images/valentina/valentina-2.webp",
        "/images/valentina/valentina-3.webp",
        "/images/valentina/valentina-4.webp",
        "/images/valentina/valentina-5.jpg",
        "/images/valentina/valentina-6.webp",
        "/images/valentina/valentina-7.webp",
        "/images/valentina/valentina-8.webp",
        "/images/valentina/valentina-9.webp",
        "/images/valentina/valentina-10.webp",
        "/images/valentina/valentina-11.webp",
        "/images/valentina/valentina-12.webp",
        "/images/valentina/valentina-13.webp",
        "/images/valentina/valentina-14.webp",
        "/images/valentina/valentina-15.webp",
      ],
      photo: "/images/teamMember.jpg",
    },
    {
      id: "2",
      name: "Сабо Артем",
      slug: "sabo-artem",
      category: "Топ майстер",
      experience: getMasterExperience("Сабо Артем"),
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
        {
          id: "02",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
        {
          id: "03",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 2050,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 3000,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
      ],
      imagesOfWorksForMen: [
        "/images/men.png",
        "/images/menmiddle.jpg",
        "/images/menforsholders.jpg",
        "/images/menlong.jpg",
      ],
      imagesOfWorksForWomen: [
        "/images/artem/artem-1.webp",
        "/images/artem/artem-2.webp",
        "/images/artem/artem-3.webp",
        "/images/artem/artem-4.webp",
        "/images/artem/artem-5.webp",
        "/images/artem/artem-6.webp",
        "/images/artem/artem-7.webp",
        "/images/artem/artem-8.webp",
        "/images/artem/artem-9.webp",
      ],
      photo: "/images/sabo-artem.jpg",
    },
    {
      id: "3",
      name: "Валерія Мельниченко",
      slug: "valeria-melnichenko",
      category: "Експерт",
      experience: getMasterExperience("Валерія Мельниченко"),
      isMen: true,
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Чоловіча завивка",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1800,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1500,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "07",
          serviceTitle: "Чоловіча завивка",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
      ],
      imagesOfWorksForMen: [
        "/images/foto-men/cholovicha-valeria-1.webp",
        "/images/foto-men/cholovicha-valeria-2.webp",
        "/images/foto-men/cholovicha-valeria-3.webp",
        "/images/foto-men/cholovicha-valeria-4.webp",
        "/images/foto-men/cholovicha-valeria-5.webp",
      ],
      imagesOfWorksForWomen: [
        "/images/valeria-melnichenko/valeria-melnichenko-1.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-2.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-3.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-4.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-5.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-6.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-7.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-8.webp",
        "/images/valeria-melnichenko/valeria-melnichenko-9.webp",
      ],
      photo: "/images/valeria-melnichenko.jpg",
    },
    {
      id: "4",
      name: "Юлія Броварчук",
      slug: "yulia-brovarkchuk",
      category: "Топ майстер",
      experience: getMasterExperience("Юлія Броварчук"),
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Фарбування волосся",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1950,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 2500,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5900,
        },
      ],
      imagesOfWorksForMen: [
        "/images/men.png",
        "/images/menmiddle.jpg",
        "/images/menforsholders.jpg",
        "/images/menlong.jpg",
      ],
      imagesOfWorksForWomen: [
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-1.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-2.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-3.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-4.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-5.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-6.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-7.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-8.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-9.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-10.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-11.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-12.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-13.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-14.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-15.webp",
        "/images/yulia-brovarkchuk/yulia-brovarkchuk-16.webp",
      ],
      photo: "/images/yulia-brovarkchuk.jpg",
    },
    {
      id: "6",
      name: "Анастасія Мальчик",
      slug: "anastasiya-malchik",
      category: "Експерт",
      experience: getMasterExperience("Анастасія Мальчик"),
      isMen: true,
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Чоловіча завивка",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1800,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1500,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "07",
          serviceTitle: "Чоловіча завивка",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
      ],
      imagesOfWorksForMen: ["/images/foto-men/cholovicha-nastya-m-1.webp"],
      imagesOfWorksForWomen: [
        "/images/anastasiya-malchik/anastasiya-malchik-1.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-2.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-3.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-4.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-5.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-6.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-7.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-8.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-9.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-10.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-11.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-12.webp",
        "/images/anastasiya-malchik/anastasiya-malchik-13.webp",
      ],
      photo: "/images/anastasiya-malchik.jpg",
    },
    {
      id: "7",
      name: "Вікторія Омельченко",
      slug: "viktoriya-omelchenko",
      category: "Арт-директор",
      experience: getMasterExperience("Вікторія Омельченко"),
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1950,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 2000,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
      ],
      imagesOfWorksForMen: [
        "/images/men.png",
        "/images/menmiddle.jpg",
        "/images/menforsholders.jpg",
        "/images/menlong.jpg",
      ],
      imagesOfWorksForWomen: [
        "/images/vika-omelchenko/vika-omelchenko-1.webp",
        "/images/vika-omelchenko/vika-omelchenko-2.webp",
        "/images/vika-omelchenko/vika-omelchenko-3.webp",
        "/images/vika-omelchenko/vika-omelchenko-4.webp",
        "/images/vika-omelchenko/vika-omelchenko-5.webp",
        "/images/vika-omelchenko/vika-omelchenko-6.webp",
        "/images/vika-omelchenko/vika-omelchenko-7.webp",
        "/images/vika-omelchenko/vika-omelchenko-8.webp",
        "/images/vika-omelchenko/vika-omelchenko-9.webp",
        "/images/vika-omelchenko/vika-omelchenko-10.webp",
        "/images/vika-omelchenko/vika-omelchenko-11.webp",
        "/images/vika-omelchenko/vika-omelchenko-12.webp",
        "/images/vika-omelchenko/vika-omelchenko-13.webp",
        "/images/vika-omelchenko/vika-omelchenko-14.webp",
        "/images/vika-omelchenko/vika-omelchenko-15.webp",
        "/images/vika-omelchenko/vika-omelchenko-16.webp",
      ],
      photo: "/images/viktoriya-omelchenko.jpg",
    },
    {
      id: "8",
      name: "Вікторія Салій",
      slug: "viktoriya-salyi",
      category: "Арт-директор",
      experience: getMasterExperience("Вікторія Салій"),
      isMen: true,
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Чоловіча завивка",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1950,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 2000,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "07",
          serviceTitle: "Чоловіча завивка",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
      ],
      imagesOfWorksForMen: [
        "/images/foto-men/cholovicha-vika-s-1.webp",
        "/images/foto-men/cholovicha-vika-s-2.webp",
        "/images/foto-men/cholovicha-vika-s-3.webp",
        "/images/foto-men/cholovicha-vika-s-4.webp",
      ],
      imagesOfWorksForWomen: [
        "/images/viktoriya-salyi/viktoriya-salyi-1.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-2.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-3.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-4.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-5.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-6.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-7.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-8.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-9.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-10.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-11.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-12.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-13.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-14.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-15.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-16.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-17.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-18.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-19.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-20.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-21.webp",
        "/images/viktoriya-salyi/viktoriya-salyi-22.webp",
      ],
      photo: "/images/viktoriya-salyi.jpg",
    },
    {
      id: "9",
      name: "Діана Лєканцева",
      slug: "diana-lekanceva",
      category: "Експерт",
      experience: getMasterExperience("Діана Лєканцева"),
      isMen: true,
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Фарбування волосся",
        "Чоловіча завивка",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1800,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1500,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
        {
          id: "07",
          serviceTitle: "Чоловіча завивка",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 4950,
        },
      ],
      imagesOfWorksForMen: ["/images/foto-men/cholovicha-diana-1.webp"],
      imagesOfWorksForWomen: [
        "/images/diana-lekanceva/diana-lekanceva-1.webp",
        "/images/diana-lekanceva/diana-lekanceva-2.webp",
        "/images/diana-lekanceva/diana-lekanceva-3.webp",
        "/images/diana-lekanceva/diana-lekanceva-4.webp",
        "/images/diana-lekanceva/diana-lekanceva-5.webp",
        "/images/diana-lekanceva/diana-lekanceva-6.webp",
        "/images/diana-lekanceva/diana-lekanceva-7.webp",
        "/images/diana-lekanceva/diana-lekanceva-8.webp",
      ],
      photo: "/images/diana-lekanceva.jpg",
    },
    {
      id: "10",
      name: "Ярослава Гурбік",
      slug: "yaroslava-gurbik",
      category: "Арт-директор",
      experience: getMasterExperience("Ярослава Гурбік"),
      isMen: true,
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Чоловіча завивка",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1950,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 2000,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "07",
          serviceTitle: "Чоловіча завивка",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
      ],
      imagesOfWorksForMen: [
        "/images/foto-men/cholovicha-yaroslava-1.webp",
        "/images/foto-men/cholovicha-yaroslava-2.webp",
        "/images/foto-men/cholovicha-yaroslava-3.webp",
      ],
      imagesOfWorksForWomen: [
        "/images/yaroslava-gurbik/yaroslava-gurbik-1.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-2.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-3.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-4.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-5.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-6.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-7.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-8.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-9.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-10.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-11.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-12.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-13.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-14.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-15.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-16.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-17.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-18.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-19.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-20.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-21.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-22.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-23.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-24.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-25.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-26.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-27.webp",
        "/images/yaroslava-gurbik/yaroslava-gurbik-28.webp",
      ],
      photo: "/images/yaroslava-gurbik.jpg",
    },
    {
      id: "11",
      name: "Анастасія Кузьменко",
      slug: "anastasia-kuzmenko",
      category: "Арт-директор",
      experience: getMasterExperience("Анастасія Кузьменко"),
      isMen: true,
      specialization: [
        "Завивка волосся",
        "Стрижка кучерів",
        "Лікування волосся",
        "Укладка кучерів",
      ],
      listOfService: [
        {
          id: "01",
          serviceTitle: "Біозавивка волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "02",
          serviceTitle: 'Біозавивка "Пляжна хвиля"',
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "03",
          serviceTitle: "Карвінг волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "04",
          serviceTitle: "Японське лікування волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 1950,
        },
        {
          id: "05",
          serviceTitle: "Стрижка кучерявого волосся",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 3000,
        },
        {
          id: "06",
          serviceTitle: "Корекція завивки",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
        {
          id: "07",
          serviceTitle: "Чоловіча завивка",
          descriptionForPrice: (
            <>
              <p>Все включено:</p>
              <ul>
                <li>консультація,</li>
                <li>стрижка,</li>
                <li>укладання,</li>
                <li>рекомендації щодо догляду,</li>
                <li>підбір засобів догляду</li>
              </ul>
            </>
          ),
          price: 5450,
        },
      ],
      imagesOfWorksForMen: [
        "/images/foto-men/cholovicha-nastya-k-1.webp",
        "/images/foto-men/cholovicha-nastya-k-2.webp",
        "/images/foto-men/cholovicha-nastya-k-3.webp",
      ],
      imagesOfWorksForWomen: [
        "/images/a-kuzmenko/kuzmenko-1.webp",
        "/images/a-kuzmenko/kuzmenko-2.webp",
        "/images/a-kuzmenko/kuzmenko-3.webp",
        "/images/a-kuzmenko/kuzmenko-4.webp",
        "/images/a-kuzmenko/kuzmenko-5.webp",
        "/images/a-kuzmenko/kuzmenko-6.webp",
        "/images/a-kuzmenko/kuzmenko-7.webp",
        "/images/a-kuzmenko/kuzmenko-8.webp",
        "/images/a-kuzmenko/kuzmenko-9.webp",
        "/images/a-kuzmenko/kuzmenko-10.webp",
        "/images/a-kuzmenko/kuzmenko-11.webp",
        "/images/a-kuzmenko/kuzmenko-12.webp",
      ],
      photo: "/images/kuzmenko.webp",
    },
  ],
  loading: false,
  error: null,
};

const TeamSlice = createSlice({
  name: "Team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default TeamSlice.reducer;
