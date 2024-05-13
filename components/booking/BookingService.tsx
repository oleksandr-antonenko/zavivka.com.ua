"use client";

import styles from "@/components/booking/Booking.module.css";
import { Service } from "@/components/booking/Booking";

export function BookingService(service: Service) {
  const toggleCheckbox = () => {
    // Переключает состояние чекбокса
    const checkbox = document.getElementById(service.name) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }
  };
  return (
    <div key={service.name} className={styles.checkbox}>
      <input type="checkbox" id={service.name} name={service.name} />
      <span className={styles.checkmark} onClick={toggleCheckbox}></span>
      <label htmlFor={service.name} onClick={toggleCheckbox}>
        {service.title}
      </label>
    </div>
  );
}
