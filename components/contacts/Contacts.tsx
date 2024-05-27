"use client";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, {useState} from "react";
import DirectionsIcon from "@mui/icons-material/Directions";
import { SocialIcons } from "@/shared/social";

interface LatLng {
  lat: number;
  lng: number;
}
const containerStyle = {
  width: "100%",
  height: "750px",
};

const center = {
  lat: 50.4440321,
  lng: 30.5197785,
};
const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
console.log(GOOGLE_MAPS_API_KEY);

const Contacts = () => {
  console.log("key:", GOOGLE_MAPS_API_KEY);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<LatLng | undefined>(
    undefined,
  );
  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);
  const handleToggleOpen = () => {
    setInfoOpen(true);
    setSelectedPlace(center);
  };

  const handleToggleClose = () => {
    setInfoOpen(false);
  };

  return isLoaded ? (
    <section className="containerBox pl-5 md:pl-0 pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[100px] relative">
      <div className="flex flex-col-reverse md:flex-row gap-[60px] xl:gap-[100px] items-start relative">
        <div className="circle-grey circle-right circle-small right-0 top-0 circle-up-right"></div>
        <div className="basis-1/2 h-[348px] md:h-[750px] w-full">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} onClick={handleToggleOpen}>
              {infoOpen && (
                <InfoWindow
                  position={selectedPlace}
                  onCloseClick={handleToggleClose}
                >
                  <div className="text-black">
                    <h2 className="text-2xl">Студія завивок</h2>
                    <p>
                      <a
                        href="https://www.google.com/maps/dir//%D0%A1%D1%82%D1%83%D0%B4%D1%96%D1%8F+%D0%B7%D0%B0%D0%B2%D0%B8%D0%B2%D0%BE%D0%BA,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A5%D1%80%D0%B5%D1%89%D0%B0%D1%82%D0%B8%D0%BA,+44%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+01001/@50.4440321,30.5172036,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40d4ce5611cfe71b:0xdcb809d6661f9b52!2m2!1d30.5197785!2d50.4440321!3e0?entry=ttu"
                        target="_blank"
                        className="text-blue-800"
                      >
                        <DirectionsIcon /> Маршрут
                      </a>
                    </p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        </div>
        <div className="pt-7 pb-10 basis-1/2">
            <h2 className="font-bold text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[54px]">Студія завивок</h2>
              <p className="text-[16px] md:text-[24px] mb-9">+38 067 441 35 65</p>
              <p className="mb-[66px] md:mb-20">м. Київ, Хрещатик 44а</p>
            <h3 className="uppercase font-bold text-[24px] mb-9">Як доїхати:</h3>
            <h4 className="text-[16px] mb-6 font-bold">Якщо ви пішки</h4>
            <p className="text-[16px] mb-9">
              Найближча станція метро – «Театральна». Йти приблизно 3 хвилини.
              Вхід до арки будинку 44 (відразу за магазином «Samsung»)
            </p>
            <h4 className="text-[16px] mb-6 font-bold">Якщо ви на авто</h4>
            <p className="text-[16px] mb-[66px]">
              Рухаємось від перехрестя вулиць Хрещатик та Б.Хмельницького у бік
              Бессарабської площі. Поворот у наш двір другий за рахунком.
              Найпомітніший орієнтир - магазин Samsung. Місця для паркування
              обмежені, тому просимо під час запису вказати, що Ви на машині.
            </p>
            <SocialIcons/>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Contacts;