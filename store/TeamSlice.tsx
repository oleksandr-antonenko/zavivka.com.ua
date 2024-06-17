import { createSlice, UnknownAction, PayloadAction} from "@reduxjs/toolkit";
import { TeamState } from "./type";

const setError = (action: UnknownAction) => {
    return action.type.endsWith('rejected');
}

const initialState: TeamState = {
    listOfTeam: [
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
        {
          name: "Валентина Антоненко",
          category: "Топ майстер",
          experience: "20 років",
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
              price: 3950,
            },
            {
              id: "02",
              serviceTitle: "Карвінг",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "03",
              serviceTitle: "Лікуваня волосся",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
              id: "04",
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
              price: 3950,
            },
            {
              id: "05",
              serviceTitle: "Фарбуання волосся",
              descriptionForPrice: (
                <>
                 <p>Все включено:</p>
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
              id: "06",
              serviceTitle: "Подарунковий сертифікат",
              descriptionForPrice: (
                <>
                  <p>Все включено:</p>
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
          imagesOfWorksForMen: ["/images/men.png", "/images/menmiddle.jpg", "/images/menforsholders.jpg", "/images/menlong.jpg"],
          imagesOfWorksForWomen: ["/images/clients/semenova.jpg", "/images/shorthair.png", "/images/services/zavivka.jpg", "/images/smallmiddle.png", "/images/clients/kateryna.jpg"],
          photo: "/images/teamMember.jpg",
        },
    ],
    loading: false,
    error: null,
}

const TeamSlice = createSlice({
    name: "Team",
    initialState,
    reducers: {
    },
    extraReducers: builder =>{},

})

export default TeamSlice.reducer;