// components/services/ServiceCard.js
"use client";
import React, { useRef } from "react";
import { Service } from "./Services";
import styles from "./Services.module.css";
import Image from "next/image";
export default function ServiceCard(service: Service) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current && videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <div
      className={styles.serviceCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={"/images/services/" + service.image}
        alt={service.name}
        className={styles.serviceImage}
        width="300"
        height="300"
      />
      <video
        ref={videoRef}
        width="300"
        height="300"
        className={styles.serviceVideo}
        loop
        muted
      >
        <source src={"/videos/services/" + service.video} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className={styles.serviceTitle}>{service.name}</div>
    </div>
  );
}
