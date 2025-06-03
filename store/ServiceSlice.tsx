import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import { ServiceState } from './type';

const setError = (action: UnknownAction) => {
  return action.type.endsWith('rejected');
};

const initialState: ServiceState = {
  listService: [
    {
      id: '01',
      serviceTitle: 'Завивка волосся',
      images: [
        {
          imageTitle: 'Короткі',
          images: [
            {
              forMen: ['/images/men.png'],
              forWomen: [
                '/images/clients/semenova.jpg',
                '/images/shorthair.png',
              ],
            },
          ],
        },
        {
          imageTitle: 'До плечей',
          images: [
            {
              forMen: ['/images/menmiddle.jpg'],
              forWomen: ['/images/services/zavivka.jpg'],
            },
          ],
        },
        {
          imageTitle: 'До лопаток',
          images: [
            {
              forMen: ['/images/menforsholders.jpg'],
              forWomen: [
                '/images/smallmiddle.png',
                '/images/clients/kateryna.jpg',
              ],
            },
          ],
        },
        {
          imageTitle: 'Нижче лопаток',
          images: [
            {
              forMen: ['/images/menlong.jpg'],
              forWomen: ['/images/longhair.png', '/images/fun.jpg'],
            },
          ],
        },
      ],
      imagesCurl: [
        {
          imageTitle: 'Маленький',
          images: [
            {
              forMen: ['/images/menmiddle.jpg'],
              forWomen: [
                '/images/shorthair.png',
                '/images/clients/semenova.jpg',
                '/images/smallmiddle.png',
              ],
            },
          ],
        },
        {
          imageTitle: 'Середній',
          images: [
            {
              forMen: ['/images/men.png', '/images/menforsholders.png'],
              forWomen: ['/images/services/zavivka.jpg', '/images/fun.jpg'],
            },
          ],
        },
        {
          imageTitle: 'Крупний',
          images: [
            {
              forMen: ['/images/menlong.jpg'],
              forWomen: [
                '/images/longhair.png',
                '/images/services/kateryna.jpg',
              ],
            },
          ],
        },
      ],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4650,
      priceArtDir: 5150,
      priceTop: 5600,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '10',
      serviceTitle: 'Завивка короткого волосся',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/men-zavivka-korotkoe.jpeg',
      priceExpert: 4650,
      priceArtDir: 5150,
      priceTop: 5600,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '11',
      serviceTitle: 'Завивка волосся по плечі',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/men-zavivka-plechi.webp',
      priceExpert: 4950,
      priceArtDir: 5450,
      priceTop: 5900,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '12',
      serviceTitle: 'Стрижка кучерів',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/other-men.webp',
      priceExpert: 1300,
      priceArtDir: 2000,
      priceTop: 2500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '02',
      serviceTitle: 'Корекція завивки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4650,
      priceArtDir: 5150,
      priceTop: 5600,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '03',
      serviceTitle: 'Стрижка кучерів',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 1300,
      priceArtDir: 2000,
      priceTop: 2500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '04',
      serviceTitle: 'Лікування волосся Hahonico',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 1700,
      priceArtDir: 1850,
      priceTop: 1950,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '05',
      serviceTitle: 'Укладка кучерів на дифузор',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 600,
      priceArtDir: 700,
      priceTop: 800,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '06',
      serviceTitle: 'Чоловіча завивки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4650,
      priceArtDir: 5150,
      priceTop: 5600,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '07',
      serviceTitle: 'Фарбування коренів',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 2000,
      priceArtDir: 2800,
      priceTop: 2800,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '08',
      serviceTitle: 'Фарбування по довжині',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 2500,
      priceArtDir: 3400,
      priceTop: 3400,
      priceExpertCut: 1300,
      priceArtDirCut: 2000,
      priceTopCut: 2500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '09',
      serviceTitle: 'Тест пасма',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 600,
      priceArtDir: 800,
      priceTop: 1000,
      priceExpertCut: 1300,
      priceArtDirCut: 2000,
      priceTopCut: 2500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '13',
      serviceTitle: 'Корекція короткого волосся',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4650,
      priceArtDir: 5150,
      priceTop: 5600,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '14',
      serviceTitle: 'Корекція середньої довжини',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 5250,
      priceArtDir: 5950,
      priceTop: 6400,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '15',
      serviceTitle: 'Корекція довгого волосся',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 5800,
      priceArtDir: 6550,
      priceTop: 7000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '16',
      serviceTitle: 'Стрижка кучерів',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 1300,
      priceArtDir: 2000,
      priceTop: 2500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '17',
      serviceTitle: 'Лікування короткого волосся',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 1700,
      priceArtDir: 1850,
      priceTop: 1950,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '18',
      serviceTitle: 'Лікування волосся по плечі',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 1900,
      priceArtDir: 2000,
      priceTop: 2100,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '19',
      serviceTitle: 'Лікування волосся по лопатки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 2100,
      priceArtDir: 2200,
      priceTop: 2300,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '20',
      serviceTitle: 'Лікування волосся за лопатки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 2300,
      priceArtDir: 2400,
      priceTop: 2500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '21',
      serviceTitle: 'Коротке волосся',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4650,
      priceArtDir: 5150,
      priceTop: 5600,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '22',
      serviceTitle: 'Волосся по плечі',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4950,
      priceArtDir: 5450,
      priceTop: 5900,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '23',
      serviceTitle: 'Волосся по лопатки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 5250,
      priceArtDir: 5950,
      priceTop: 6400,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '24',
      serviceTitle: 'Волосся за лопатки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 5850,
      priceArtDir: 6550,
      priceTop: 7000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '25',
      serviceTitle: 'Волосся по пояс',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 6250,
      priceArtDir: 6950,
      priceTop: 7500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '26',
      serviceTitle: 'Коротке волосся',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4650,
      priceArtDir: 5150,
      priceTop: 5600,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '27',
      serviceTitle: 'Волосся по плечі',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 4950,
      priceArtDir: 5450,
      priceTop: 5900,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '28',
      serviceTitle: 'Волосся по лопатки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 5250,
      priceArtDir: 5950,
      priceTop: 6400,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '29',
      serviceTitle: 'Волосся за лопатки',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 5850,
      priceArtDir: 6550,
      priceTop: 7000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '30',
      serviceTitle: 'Волосся по пояс',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 6250,
      priceArtDir: 6950,
      priceTop: 7500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '31',
      serviceTitle: 'Стрижка кучерів',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 1300,
      priceArtDir: 2000,
      priceTop: 2500,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '32',
      serviceTitle: 'Японське лікування кучерів',
      images: [],
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
      imageForPriceWomen: '/images/services/zavivka.jpg',
      imageForPriceMen: '/images/menmiddle.jpg',
      priceExpert: 1700,
      priceArtDir: 1850,
      priceTop: 1950,
      video: 'videos/services/zavivka.mp4',
    },
  ],
  loading: false,
  error: null,
};

const ServiceSlice = createSlice({
  name: 'Services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default ServiceSlice.reducer;
