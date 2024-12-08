import { createSlice, UnknownAction} from "@reduxjs/toolkit";
import { ServiceState } from "./type";

const setError = (action: UnknownAction) => {
    return action.type.endsWith('rejected');
}

const initialState: ServiceState = {
    listService: [
      {
        id: "01",
        serviceTitle: "Біозавивка волосся",
        images: [
          {imageTitle: "Короткі", images:["/images/clients/semenova.jpg", "/images/shorthair.png"]},
          {imageTitle: "До плечей", images:["/images/services/zavivka.jpg",]},
          {imageTitle: "До лопаток", images:["/images/smallmiddle.png", "/images/clients/kateryna.jpg"]},
          {imageTitle: "Нижче лопаток", images:["/images/longhair.png", "/images/fun.jpg"]},
        ],
        imagesCurl: [
          {imageTitle: "Маленький", images:["/images/shorthair.png", "/images/clients/semenova.jpg", "/images/smallmiddle.png"]},
          {imageTitle: "Середній", images:["/images/services/zavivka.jpg", "/images/fun.jpg"]},
          {imageTitle: "Крупний", images:["/images/longhair.png", "/images/services/kateryna.jpg"]},
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 4250,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "02",
        serviceTitle: "Карвінг",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 3950,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "03",
        serviceTitle: "Стрижка кучерявого волосся",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 1300,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "04",
        serviceTitle: "Лікуваня волосся",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 1600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "05",
        serviceTitle: "Фарбуання коренів",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 1700,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "06",
        serviceTitle: "Фарбуання по довжині",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 2200,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "07",
        serviceTitle: "Укладка на дифузор",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "08",
        serviceTitle: "Подарунковий сертифікат",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 4250,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
    ],
    listServiceMen: [
      {
        id: "01",
        serviceTitle: "Біозавивка волосся",
        images: [
          {imageTitle: "Короткі", images:["/images/men.png",]},
          {imageTitle: "До плечей", images:["/images/menmiddle.jpg",]},
          {imageTitle: "До лопаток", images:["/images/menforsholders.jpg",]},
          {imageTitle: "Нижче лопаток", images:["/images/menlong.jpg",]},
        ],
        imagesCurl: [
          {imageTitle: "Маленький", images:["/images/menmiddle.jpg",]},
          {imageTitle: "Середній", images:["/images/men.png", "/images/menforsholders.png",]},
          {imageTitle: "Крупний", images:["/images/menlong.jpg",]},
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 4250,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "03",
        serviceTitle: "Стрижка кучерявого волосся",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 1300,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "04",
        serviceTitle: "Лікуваня волосся",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 1600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "07",
        serviceTitle: "Укладка на дифузор",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "08",
        serviceTitle: "Подарунковий сертифікат",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 4250,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
    ],
    listServiceCut: [
      {
        id: "03",
        serviceTitle: "Стрижка кучерявого волосся",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 1300,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "04",
        serviceTitle: "Лікуваня волосся",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 1600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "05",
        serviceTitle: "Фарбуання коренів",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 1700,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "06",
        serviceTitle: "Фарбуання по довжині",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 2200,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "07",
        serviceTitle: "Укладка на дифузор",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "08",
        serviceTitle: "Подарунковий сертифікат",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 1300,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
    ],
    listServiceCutMen: [
      {
        id: "03",
        serviceTitle: "Стрижка кучерявого волосся",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 1300,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "04",
        serviceTitle: "Лікуваня волосся",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 1600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "07",
        serviceTitle: "Укладка на дифузор",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 600,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "08",
        serviceTitle: "Подарунковий сертифікат",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 1300,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
    ],
    listServiceZav: [
      {
        id: "01",
        serviceTitle: "Біозавивка волосся",
        images: [
          {imageTitle: "Короткі", images:["/images/clients/semenova.jpg", "/images/shorthair.png"]},
          {imageTitle: "До плечей", images:["/images/services/zavivka.jpg",]},
          {imageTitle: "До лопаток", images:["/images/smallmiddle.png", "/images/clients/kateryna.jpg"]},
          {imageTitle: "Нижче лопаток", images:["/images/longhair.png", "/images/fun.jpg"]},
        ],
        imagesCurl: [
          {imageTitle: "Маленький", images:["/images/shorthair.png", "/images/clients/semenova.jpg", "/images/smallmiddle.png"]},
          {imageTitle: "Середній", images:["/images/services/zavivka.jpg", "/images/fun.jpg"]},
          {imageTitle: "Крупний", images:["/images/longhair.png", "/images/services/kateryna.jpg"]},
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 4250,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "04",
        serviceTitle: "Лікуваня волосся",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 3950,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "08",
        serviceTitle: "Подарунковий сертифікат на стрижку кучерів І лікування",
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
        imageForPrice: "/images/services/zavivka.jpg",
        priceExpert: 3950,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
    ],
    listServiceZavMen: [
      {
        id: "01",
        serviceTitle: "Біозавивка волосся",
        images: [
          {imageTitle: "Короткі", images:["/images/men.png",]},
          {imageTitle: "До плечей", images:["/images/menmiddle.jpg",]},
          {imageTitle: "До лопаток", images:["/images/menforsholders.jpg",]},
          {imageTitle: "Нижче лопаток", images:["/images/menlong.jpg",]},
        ],
        imagesCurl: [
          {imageTitle: "Маленький", images:["/images/menmiddle.jpg",]},
          {imageTitle: "Середній", images:["/images/men.png", "/images/menforsholders.png",]},
          {imageTitle: "Крупний", images:["/images/menlong.jpg",]},
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 4250,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "04",
        serviceTitle: "Лікуваня волосся",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 3950,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "08",
        serviceTitle: "Подарунковий сертифікат на стрижку кучерів І лікування",
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
        imageForPrice: "/images/menmiddle.jpg",
        priceExpert: 3950,
        priceArtDir: 2000,
        priceTop: 2500,
        video: "videos/services/zavivka.mp4",
      },
    ],

    loading: false,
    error: null,
}

const ServiceSlice = createSlice({
    name: "Services",
    initialState,
    reducers: {

    },
    extraReducers: builder =>{},

})

export default ServiceSlice.reducer;