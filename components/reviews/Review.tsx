"use client";
import Image from "next/image";
import type { FC } from "react";
import { ReviewProps } from "./type";
import { SpriteSVGSocial } from "@/shared/svg";
import classes from './Reviews.module.css';

const Review: FC<ReviewProps> = ({ reviews, current, onclick }) => {

  return (
    <>
      {reviews.map((review) => (
        <div
          className={`${classes.reviewBox} py-6 px-6 max-w-[200px] sm:min-w-[284px] border border-orange rounded-[20px] md:p-[30px] h-[508px] md:h-[380px] md:min-w-[600px] md:max-w-[849px]`}
          key={review.id}
          style={{
            transform: `translate(-${current * 100}%)`,
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
              <div>
                <div className="h-[190px] w-[190px] sm:h-[250px] sm:w-[250px] md:h-[285px] md:min-w-[285px] pr-5">
                  <Image
                    src={`/images/clients/${review.image}`}
                    alt={review.clientName}
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full rounded-[20px] h-full"
                  />
                </div>
                <div className="flex gap-[14px] text-[16px] pl-[10px] mt-4">
                  {review.socialLink && review.social && (
                    <a href={review.socialLink} target="_blank">
                      <SpriteSVGSocial name={review.social} />
                    </a>
                  )}
                  <p>{review.clientName}</p>
                </div>
              </div>
              <p className={`${classes.reviewText} max-h-[150px] md:max-h-[320px] md:py-5 pr-[10px] font-mali text-[12px] text-start overflow-y-auto`}>{review.reviewText}</p>
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
