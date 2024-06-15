import {Service } from "@/store/type";

export interface PriceProps {
    servicePrices: Service[];
    onClick?: (e: number) => void;
    currentChoice?: number;
    forMen?: boolean;
    haircut?: boolean;
}

