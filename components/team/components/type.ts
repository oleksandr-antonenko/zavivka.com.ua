import { MemberService } from "@/store/type";

export interface MemberServiceProps {
    servicePrices: MemberService[];
    onClick?: (e: number) => void;
    currentChoice?: number | null;
}

export interface PhotoSliderProps {
    photosMen: string[];
    photosWomen: string[];
    forMen?: boolean;
    current: number;
    onclick: (i: number) => void;
    openSlider?: (i: boolean) => void;
}

export interface ModalSliderProps extends PhotoSliderProps {
    visible: boolean;
    close: () => void;
}
