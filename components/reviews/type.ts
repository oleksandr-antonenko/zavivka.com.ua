import { Feedback } from "@/store/type";

export interface ReviewProps {
    reviews: Feedback[];
    current: number;
    onclick: (e:number) => void;
};
