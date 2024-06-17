import { Service } from "@/store/type";

export interface ZavivkaChoice {
    serviceImages: Service;
    formen?: boolean;
    currentHeight: number;
    currentCurl?: number;
    onClickHeight?: (e: number) => void;
    onClickCurl?: (e: number) => void;
}
