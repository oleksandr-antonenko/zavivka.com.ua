import {Service, ServiceCut, ServiceCutMen, ServiceMen } from "@/store/type";

export interface PriceProps {
    servicePrices: Service[] | ServiceMen[] | ServiceCut[] | ServiceCutMen[];
    onClick?: (e: number) => void;
    currentChoice?: number;
}

