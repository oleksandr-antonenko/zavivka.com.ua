import { Service } from "@/store/type";

export interface ZavivkaChoice {
  serviceImages: Service;
  formen?: boolean;
  currentHeight: number;
  currentCurl?: number;
  onClickHeight?: (e: number) => void;
  onClickCurl?: (e: number) => void;
}

export type HairLength =
  | "Короткі"
  | "До плечей"
  | "До лопаток"
  | "За лопатки"
  | "По пояс"
  | "Всі";
export type CurlSize = "Маленький" | "Середній" | "Крупний" | "Всі";
export type Colored = "Так" | "Ні" | "Всі";
