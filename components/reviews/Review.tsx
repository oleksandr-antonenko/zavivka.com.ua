"use client";
import styles from "@/components/reviews/Reviews.module.css";
import Image from "next/image";
import { images } from "next/dist/build/webpack/config/blocks/images";
import { useState } from "react";
export interface ReviewItem {
  clientName: string;
  reviewText: string;
  image: string;
  social?: "instagram" | "facebook" | "google";
}
export function Review(review: ReviewItem) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`${styles.reviewItem} ${isFlipped ? styles.flipped : ""}`}
      onClick={toggleFlip}
    >
      <div className={styles.reviewBody}>
        <div className={`${styles.photo} ${isFlipped ? styles.hidden : ""}`}>
          <Image
            src={`/images/clients/${review.image}`}
            alt={review.clientName}
            width={285}
            height={285}
          />
        </div>
        <div
          className={`${styles.reviewText} ${isFlipped ? "" : styles.hidden}`}
        >
          <p>{review.reviewText}</p>
        </div>
      </div>
      <div className={styles.reviewBottom}>
        {!review.social || (
          <Image
            src={`/images/social/${review.social}.svg`}
            alt={review.social}
          />
        )}
        <span>{review.clientName}</span>
      </div>
    </div>
  );
}
