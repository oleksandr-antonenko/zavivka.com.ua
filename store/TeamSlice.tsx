import { createSlice, UnknownAction, PayloadAction } from '@reduxjs/toolkit';
import { TeamState } from './type';

const setError = (action: UnknownAction) => {
  return action.type.endsWith('rejected');
};

const initialState: TeamState = {
  listOfTeam: [
    {
      id: '1',
      name: 'Валентина Антоненко',
      slug: 'valentina-antonenko',
      category: 'Директор',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5700,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг волосся',
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
          price: 5700,
        },
        {
          id: '03',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5700,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5700,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/valentina/valentina-1.webp',
        '/images/valentina/valentina-2.webp',
        '/images/valentina/valentina-3.webp',
        '/images/valentina/valentina-4.webp',
        '/images/valentina/valentina-5.jpg',
        '/images/valentina/valentina-6.webp',
        '/images/valentina/valentina-7.webp',
        '/images/valentina/valentina-8.webp',
        '/images/valentina/valentina-9.webp',
        '/images/valentina/valentina-10.webp',
        '/images/valentina/valentina-11.webp',
        '/images/valentina/valentina-12.webp',
        '/images/valentina/valentina-13.webp',
        '/images/valentina/valentina-14.webp',
        '/images/valentina/valentina-15.webp',
      ],
      photo: '/images/teamMember.jpg',
    },
    {
      id: '2',
      name: 'Сабо Артем',
      slug: 'sabo-artem',
      category: 'Топ майстер',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5600,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг волосся',
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
          price: 5600,
        },
        {
          id: '03',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5600,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5600,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/artem/artem-1.webp',
        '/images/artem/artem-2.webp',
        '/images/artem/artem-3.webp',
        '/images/artem/artem-4.webp',
        '/images/artem/artem-5.webp',
        '/images/artem/artem-6.webp',
        '/images/artem/artem-7.webp',
        '/images/artem/artem-8.webp',
        '/images/artem/artem-9.webp',
      ],
      photo: '/images/sabo-artem.jpg',
    },
    {
      id: '3',
      name: 'Валерія Мельниченко',
      slug: 'valeria-melnichenko',
      category: 'Експерт',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Чоловіча завивка',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 4650,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 4650,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 4650,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          price: 1700,
        },
        {
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          price: 1300,
        },
        {
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 4650,
        },
        {
          id: '07',
          serviceTitle: 'Чоловіча завивка',
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
          price: 4650,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/valeria-melnichenko/valeria-melnichenko-1.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-2.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-3.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-4.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-5.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-6.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-7.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-8.webp',
        '/images/valeria-melnichenko/valeria-melnichenko-9.webp',
      ],
      photo: '/images/valeria-melnichenko.jpg',
    },
    {
      id: '4',
      name: 'Юлія Броварчук',
      slug: 'yulia-brovarkchuk',
      category: 'Топ майстер',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Фарбування волосся',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5600,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5600,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 5600,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5600,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-1.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-2.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-3.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-4.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-5.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-6.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-7.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-8.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-9.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-10.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-11.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-12.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-13.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-14.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-15.webp',
        '/images/yulia-brovarkchuk/yulia-brovarkchuk-16.webp',
      ],
      photo: '/images/yulia-brovarkchuk.jpg',
    },
    {
      id: '5',
      name: 'Ольга Колле',
      slug: 'olga-kolle',
      category: 'Топ майстер',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Фарбування волосся',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5600,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5600,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 5600,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5600,
        },
        {
          id: '07',
          serviceTitle: 'Чоловіча завивка',
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
          price: 5600,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/clients/semenova.jpg',
        '/images/shorthair.png',
        '/images/services/zavivka.jpg',
        '/images/smallmiddle.png',
        '/images/clients/kateryna.jpg',
      ],
      photo: '/images/olga-kolle.jpg',
    },
    {
      id: '6',
      name: 'Анастасія Мальчик',
      slug: 'anastasiya-malchik',
      category: 'Експерт',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Чоловіча завивка',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 4650,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 4650,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 4650,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          price: 1700,
        },
        {
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          price: 1300,
        },
        {
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 4650,
        },
        {
          id: '07',
          serviceTitle: 'Чоловіча завивка',
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
          price: 4650,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/anastasiya-malchik/anastasiya-malchik-1.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-2.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-3.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-4.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-5.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-6.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-7.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-8.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-9.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-10.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-11.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-12.webp',
        '/images/anastasiya-malchik/anastasiya-malchik-13.webp',
      ],
      photo: '/images/anastasiya-malchik.jpg',
    },
    {
      id: '7',
      name: 'Вікторія Омельченко',
      slug: 'viktoriya-omelchenko',
      category: 'Арт-директор',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5150,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5150,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 5150,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          price: 1850,
        },
        {
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5150,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/vika-omelchenko/vika-omelchenko-1.webp',
        '/images/vika-omelchenko/vika-omelchenko-2.webp',
        '/images/vika-omelchenko/vika-omelchenko-3.webp',
        '/images/vika-omelchenko/vika-omelchenko-4.webp',
        '/images/vika-omelchenko/vika-omelchenko-5.webp',
        '/images/vika-omelchenko/vika-omelchenko-6.webp',
        '/images/vika-omelchenko/vika-omelchenko-7.webp',
        '/images/vika-omelchenko/vika-omelchenko-8.webp',
        '/images/vika-omelchenko/vika-omelchenko-9.webp',
        '/images/vika-omelchenko/vika-omelchenko-10.webp',
        '/images/vika-omelchenko/vika-omelchenko-11.webp',
        '/images/vika-omelchenko/vika-omelchenko-12.webp',
        '/images/vika-omelchenko/vika-omelchenko-13.webp',
        '/images/vika-omelchenko/vika-omelchenko-14.webp',
        '/images/vika-omelchenko/vika-omelchenko-15.webp',
        '/images/vika-omelchenko/vika-omelchenko-16.webp',
      ],
      photo: '/images/viktoriya-omelchenko.jpg',
    },
    {
      id: '8',
      name: 'Вікторія Салій',
      slug: 'viktoriya-salyi',
      category: 'Арт-директор',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Чоловіча завивка',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5150,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5150,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 5150,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          price: 1850,
        },
        {
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5150,
        },
        {
          id: '07',
          serviceTitle: 'Чоловіча завивка',
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
          price: 5150,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/viktoriya-salyi/viktoriya-salyi-1.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-2.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-3.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-4.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-5.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-6.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-7.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-8.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-9.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-10.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-11.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-12.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-13.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-14.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-15.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-16.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-17.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-18.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-19.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-20.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-21.webp',
        '/images/viktoriya-salyi/viktoriya-salyi-22.webp',
      ],
      photo: '/images/viktoriya-salyi.jpg',
    },
    {
      id: '9',
      name: 'Діана Лєканцева',
      slug: 'diana-lekanceva',
      category: 'Експерт',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Фарбування волосся',
        'Чоловіча завивка',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 4650,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 4650,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 4650,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          price: 1700,
        },
        {
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          price: 1300,
        },
        {
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 4650,
        },
        {
          id: '07',
          serviceTitle: 'Чоловіча завивка',
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
          price: 4650,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/clients/semenova.jpg',
        '/images/shorthair.png',
        '/images/services/zavivka.jpg',
        '/images/smallmiddle.png',
        '/images/clients/kateryna.jpg',
      ],
      photo: '/images/diana-lekanceva.jpg',
    },
    {
      id: '10',
      name: 'Ярослава Гурбік',
      slug: 'yaroslava-gurbik',
      category: 'Арт-директор',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Чоловіча завивка',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5150,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5150,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 5150,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          price: 1850,
        },
        {
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5150,
        },
        {
          id: '07',
          serviceTitle: 'Чоловіча завивка',
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
          price: 5150,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/clients/semenova.jpg',
        '/images/shorthair.png',
        '/images/services/zavivka.jpg',
        '/images/smallmiddle.png',
        '/images/clients/kateryna.jpg',
      ],
      photo: '/images/yaroslava-gurbik.jpg',
    },
    {
      id: '11',
      name: 'Анастасія Кузьменко',
      slug: 'anastasia-kuzmenko',
      category: 'Арт-директор',
      experience: '20 років',
      specialization: [
        'Завивка волосся',
        'Стрижка кучерів',
        'Лікування волосся',
        'Укладка кучерів',
      ],
      listOfService: [
        {
          id: '01',
          serviceTitle: 'Біозавивка волосся',
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
          price: 5150,
        },
        {
          id: '02',
          serviceTitle: 'Біозавивка “Пляжна хвиля”',
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
          price: 5150,
        },
        {
          id: '03',
          serviceTitle: 'Карвінг волосся',
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
          price: 5150,
        },
        {
          id: '04',
          serviceTitle: 'Японське лікування волосся',
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
          price: 1850,
        },
        {
          id: '05',
          serviceTitle: 'Стрижка кучерявого волосся',
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
          id: '06',
          serviceTitle: 'Корекція завивки',
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
          price: 5150,
        },
        {
          id: '07',
          serviceTitle: 'Чоловіча завивка',
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
          price: 5150,
        },
      ],
      imagesOfWorksForMen: [
        '/images/men.png',
        '/images/menmiddle.jpg',
        '/images/menforsholders.jpg',
        '/images/menlong.jpg',
      ],
      imagesOfWorksForWomen: [
        '/images/a-kuzmenko/kuzmenko-1.webp',
        '/images/a-kuzmenko/kuzmenko-2.webp',
        '/images/a-kuzmenko/kuzmenko-3.webp',
        '/images/a-kuzmenko/kuzmenko-4.webp',
        '/images/a-kuzmenko/kuzmenko-5.webp',
        '/images/a-kuzmenko/kuzmenko-6.webp',
        '/images/a-kuzmenko/kuzmenko-7.webp',
        '/images/a-kuzmenko/kuzmenko-8.webp',
        '/images/a-kuzmenko/kuzmenko-9.webp',
        '/images/a-kuzmenko/kuzmenko-10.webp',
        '/images/a-kuzmenko/kuzmenko-11.webp',
        '/images/a-kuzmenko/kuzmenko-12.webp',
      ],
      photo: '/images/kuzmenko.webp',
    },
  ],
  loading: false,
  error: null,
};

const TeamSlice = createSlice({
  name: 'Team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default TeamSlice.reducer;
