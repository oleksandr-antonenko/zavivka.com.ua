"use client";

import styles from "./Booking.module.css";
import { BookingService } from "@/components/booking/BookingService";

export type Service = {
  name: string;
  title: string;
};

export function Booking() {
  const servicesLeft: Service[] = [
    { name: "zavivka", title: "Біозавивка волосся" },
    { name: "carving", title: "Карвінг" },
    { name: "haircut", title: "Стрижка кучерявого волосся" },
  ];
  const servicesRight: Service[] = [
    { name: "color", title: "Фарбування волосся" },
    { name: "treatment", title: "Лікування волосся" },
    { name: "diffuser", title: "Укладка на дифузор" },
  ];
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const formData = new FormData(event.currentTarget); // Получаем данные формы
    const formProps = Object.fromEntries(formData); // Преобразуем данные формы в объект

    // Выводим в консоль значения всех полей
    console.log("Значения формы:", formProps);
  };
  return (
    <section>
      <div className={styles.booking}>
        <div className={styles.bookingFormContainer}>
          <form onSubmit={handleSubmit}>
            <h2>Запишіться на послугу</h2>
            <h4>
              Ми підберемо для Вас оптимальний час і допоможемо вибрати майстра.
            </h4>
            <div className={styles.inputs}>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.roundedInput}
              />
              <input
                type="phone"
                id="phone"
                name="phone"
                className={styles.roundedInput}
              />
            </div>
            <div className={styles.checkboxes}>
              <div className={styles.checkboxGroup}>
                {servicesLeft.map((service, index) => {
                  return (
                    <BookingService
                      key={service.name}
                      name={service.name}
                      title={service.title}
                    />
                  );
                })}
              </div>
              <div className={styles.checkboxGroup}>
                {servicesRight.map((service, index) => {
                  return (
                    <BookingService
                      key={service.name}
                      name={service.name}
                      title={service.title}
                    />
                  );
                })}
              </div>
            </div>
            <button type="submit">Записатися зараз</button>
            <p>Натискаючи кнопку даєте згоду на обробку персональних данних </p>
          </form>
        </div>
      </div>
    </section>
  );
}
