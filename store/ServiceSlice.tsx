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
        id: "04",
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
        priceExpert: 3950,
        priceArtDir: 4500,
        priceTop: 5000,
        video: "videos/services/zavivka.mp4",
      },
      {
        id: "05",
        serviceTitle: "Фарбуання волосся",
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
        id: "06",
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
        priceExpert: 3950,
        priceArtDir: 4500,
        priceTop: 5000,
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