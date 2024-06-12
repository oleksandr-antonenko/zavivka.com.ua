"use client";
import styles from "@/components/reviews/Reviews.module.css";
import Image from "next/image";
import { useState } from "react";
import type { FC } from "react";
import { ReviewProps } from "./type";
import { SpriteSVGSocial } from "@/shared/svg";

const Review: FC<ReviewProps> = ({ reviews, current, onclick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <>
      {reviews.map((review) => (
        <div
          className={`${styles.reviewItem} ${isFlipped ? styles.flipped : ""} hidden md:block`}
          onClick={toggleFlip}
          key={review.id}
          style={{
            transform: `translate(-${reviews.length > 3 ? current * 70 : 0}%)`,
          }}
        >
          <div className={styles.reviewBody}>
            <div
              className={`${styles.photo} ${isFlipped ? styles.hidden : ""} `}
            >
              <Image
                src={`/images/clients/${review.image}`}
                alt={review.clientName}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full"
              />
            </div>
            <div
              className={`${styles.reviewText} ${isFlipped ? "" : styles.hidden}`}
            >
              <p className="font-mali">{review.reviewText}</p>
            </div>
          </div>
          <div className={styles.reviewBottom}>
            {review.socialLink && review.social && (
              <a href={review.socialLink} target="_blank">
                <SpriteSVGSocial name={review.social} />
              </a>
            )}
            <p>{review.clientName}</p>
          </div>
        </div>
      ))}

      {reviews.map((review) => (
        <div
          className="block md:hidden h-[528px] border border-orange py-6 px-6 rounded-[20px] min-w-[260px] sm:min-w-[284px] extraSm:overflow-x-auto sm:overflow-x-hidden overflow-y-auto  transition-transform duration-500 ease-in-out"
          key={review.id}
          style={{ transform: `translate(-${current * 100}%)` }}
        >
          <div className="mb-4 h-[190px] w-[190px] sm:h-[250px] sm:w-[250px]">
            <Image
              src={`/images/clients/${review.image}`}
              alt={review.clientName}
              sizes="100vw"
              width={0}
              height={0}
              className="w-full rounded-[20px]"
            />
          </div>
          <div className="mb-[30px]">
            {review.socialLink && review.social && (
              <a href={review.socialLink} target="_blank">
                <SpriteSVGSocial name={review.social} />
              </a>
            )}
            <div className="max-h-136px ">
              <p className="text-[16px] w-full">{review.clientName}</p>
            </div>
          </div>
          <div className="">
            <p className="font-mali text-[12px]">{review.reviewText}</p>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-center gap-3 w-full absolute -bottom-10">
        {reviews.map((s, i) => {
          return (
            <div
              key={s.id}
              onClick={() => onclick(i)}
              className={`cursor-pointer rounded-full w-[15px] h-[15px] border ${i === current ? "bg-white border-white" : "bg-transparent border-orange"}`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Review;
