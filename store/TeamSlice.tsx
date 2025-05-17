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
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '2',
      name: 'Ірина Коваленко',
      slug: 'irina-kovalenko',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '3',
      name: 'Марія Петренко',
      slug: 'maria-petrenko',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '4',
      name: 'Юлія Павленко',
      slug: 'yulia-pavlenko',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '5',
      name: 'Олена Мельник',
      slug: 'olena-melnik',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '6',
      name: 'Наталія Шевченко',
      slug: 'natalia-shevchenko',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '7',
      name: 'Тетяна Бондаренко',
      slug: 'tetiana-bondarenko',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '8',
      name: 'Вікторія Данилюк',
      slug: 'victoria-danyliuk',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '9',
      name: 'Софія Ковальчук',
      slug: 'sofia-kovalchuk',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
    },
    {
      id: '10',
      name: 'Анна Литвиненко',
      slug: 'anna-lytvynenko',
      category: 'Топ майстер',
      experience: '20 років',
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
          price: 3950,
        },
        {
          id: '02',
          serviceTitle: 'Карвінг',
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
          price: 3950,
        },
        {
          id: '03',
          serviceTitle: 'Лікуваня волосся',
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
          price: 3950,
        },
        {
          id: '04',
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
          price: 3950,
        },
        {
          id: '05',
          serviceTitle: 'Фарбуання волосся',
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
          price: 3950,
        },
        {
          id: '06',
          serviceTitle: 'Подарунковий сертифікат',
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
          price: 3950,
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
      photo: '/images/teamMember.jpg',
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
