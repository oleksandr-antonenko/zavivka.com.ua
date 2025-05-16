import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import { ServiceState } from './type';

const setError = (action: UnknownAction) => {
  return action.type.endsWith('rejected');
};

const initialState: ServiceState = {
  listService: [
    {
      id: '01',
      serviceTitle: 'Біозавивка волосся',
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
      priceExpert: 4250,
      priceArtDir: 4500,
      priceTop: 5000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '02',
      serviceTitle: 'Карвінг',
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
      priceExpert: 3950,
      priceArtDir: 4500,
      priceTop: 5000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '03',
      serviceTitle: 'Стрижка кучерявого волосся',
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
      serviceTitle: 'Лікуваня волосся',
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
      priceExpert: 1600,
      priceArtDir: 4500,
      priceTop: 5000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '05',
      serviceTitle: 'Фарбуання коренів',
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
      priceArtDir: 4500,
      priceTop: 5000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '06',
      serviceTitle: 'Фарбуання по довжині',
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
      priceExpert: 2200,
      priceArtDir: 4500,
      priceTop: 5000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '07',
      serviceTitle: 'Укладка на дифузор',
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
      priceArtDir: 4500,
      priceTop: 5000,
      video: 'videos/services/zavivka.mp4',
    },
    {
      id: '08',
      serviceTitle: 'Подарунковий сертифікат',
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
      priceExpert: 4250,
      priceArtDir: 4500,
      priceTop: 5000,
      priceExpertCut: 1300,
      priceArtDirCut: 2000,
      priceTopCut: 2500,
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
