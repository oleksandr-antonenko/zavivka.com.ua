"use client";
import styles from "@/components/contacts/Contacts.module.css";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useCallback } from "react";
import DirectionsIcon from "@mui/icons-material/Directions";

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
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;
export default function Contacts() {
  console.log("key:", GOOGLE_MAPS_API_KEY);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [infoOpen, setInfoOpen] = React.useState(false);
  const [selectedPlace, setSelectedPlace] = React.useState<LatLng | undefined>(
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
    <section>
      <div className={styles.contactsSection + " relative"}>
        <div className="circle-grey circle-right circle-small right-0 top-0 circle-up-right"></div>
        <div className={styles.googleMap}>
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
        <div className={styles.contactsDetails}>
          <div className={styles.mainInfo}>
            <h2>Студія завивок</h2>
            <div className={styles.phonesAndAddress}>
              <p>+38 067 441 35 65</p>
              <p>м. Київ, Хрещатик 44а</p>
            </div>
          </div>
          <div className={styles.directions}>
            <h4>Якщо ви пішки</h4>
            <p>
              Найближча станція метро – «Театральна». Йти приблизно 3 хвилини.
              Вхід до арки будинку 44 (відразу за магазином «Samsung»)
            </p>
            <h4>Якщо ви на авто</h4>
            <p>
              Рухаємось від перехрестя вулиць Хрещатик та Б.Хмельницького у бік
              Бессарабської площі. Поворот у наш двір другий за рахунком.
              Найпомітніший орієнтир - магазин Samsung. Місця для паркування
              обмежені, тому просимо під час запису вказати, що Ви на машині.
            </p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}
