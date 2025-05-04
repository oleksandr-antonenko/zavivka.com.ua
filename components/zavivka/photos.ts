import { CurlSize, HairLength } from "@/components/zavivka/types";

export type Photo = {
  src: string;
  hairLength: HairLength;
  curlSize: CurlSize;
  master: string;
  colored: boolean;
};

export const photos: Photo[] = [
  {
    src: "/images/variants/photo1.png",
    hairLength: "Короткі",
    curlSize: "Маленький",
    master: "Іванова",
    colored: false,
  },
  {
    src: "/images/variants/photo2.png",
    hairLength: "Короткі",
    curlSize: "Маленький",
    master: "Іванова",
    colored: false,
  },
  {
    src: "/images/variants/photo1.png",
    hairLength: "Короткі",
    curlSize: "Маленький",
    master: "Іванова",
    colored: false,
  },
  {
    src: "/images/variants/photo1.png",
    hairLength: "Короткі",
    curlSize: "Маленький",
    master: "Іванова",
    colored: false,
  },
  {
    src: "/images/variants/photo1.png",
    hairLength: "Короткі",
    curlSize: "Маленький",
    master: "Іванова",
    colored: false,
  },
  {
    src: "/images/variants/photo1.png",
    hairLength: "Короткі",
    curlSize: "Маленький",
    master: "Іванова",
    colored: false,
  },
  {
    src: "/images/variants/photo2.png",
    hairLength: "До плечей",
    curlSize: "Середній",
    master: "Петрова",
    colored: true,
  },
  {
    src: "/images/variants/photo3.png",
    hairLength: "До лопаток",
    curlSize: "Крупний",
    master: "Сидорова",
    colored: true,
  },
  {
    src: "/images/variants/photo4.jpeg",
    hairLength: "За лопатки",
    curlSize: "Маленький",
    master: "Іванова",
    colored: false,
  },
  {
    src: "/images/variants/photo5.png",
    hairLength: "До плечей",
    curlSize: "Середній",
    master: "Петрова",
    colored: false,
  },
  {
    src: "/images/variants/photo6.jpeg",
    hairLength: "Короткі",
    curlSize: "Крупний",
    master: "Сидорова",
    colored: true,
  },
];
