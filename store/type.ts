import { ReactElement } from "react";

type Social = "instagram" | "facebook" | "google";

export type Feedback = {
    id: string;
    reviewText: string;
    image: string;
    clientName: string;
    social?: Social;
    socialLink?: string;
}

export type FeedbackState = {
    listFeedback: Feedback[];
    loading: boolean;
    error: null | string;
}

export type Service = {
    id: string;
    serviceTitle: string;
    descriptionForPrice: ReactElement;
    imageForPrice: string;
    priceExpert: number;
    priceArtDir: number;
    priceTop: number;
    video?: string;
    images: string[]; 
}

export type ServiceState = {
    listService: Service[];
    loading: boolean;
    error: null | string;
}
