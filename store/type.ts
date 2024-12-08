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

type Images = {
    images: string[];
    imageTitle: string;
}

export interface MemberService {
    id: string;
    serviceTitle: string;
    descriptionForPrice: ReactElement;
    price?: number;
}

export interface Service extends MemberService {
    imageForPrice: string;
    priceExpert: number;
    priceArtDir: number;
    priceTop: number;
    video?: string;
    images: Images[];
    imagesCurl?: Images[];
}

export interface ServiceMen extends MemberService {
    imageForPrice: string;
    priceExpert: number;
    priceArtDir: number;
    priceTop: number;
    video?: string;
    images: Images[];
    imagesCurl?: Images[];
}

export interface ServiceCut extends MemberService {
    imageForPrice: string;
    priceExpert: number;
    priceArtDir: number;
    priceTop: number;
    video?: string;
    images: Images[];
    imagesCurl?: Images[];
}

export interface ServiceCutMen extends MemberService {
    imageForPrice: string;
    priceExpert: number;
    priceArtDir: number;
    priceTop: number;
    video?: string;
    images: Images[];
    imagesCurl?: Images[];
}

export type ServiceState = {
    listService: Service[];
    listServiceMen: ServiceMen[];
    listServiceCut: ServiceCut[];
    listServiceCutMen: ServiceCutMen[];
    loading: boolean;
    error: null | string;
}

export type MemberOfTeam = {
    name: string;
    category: string;
    experience: string;
    listOfService: MemberService[];
    imagesOfWorksForMen: string[];
    imagesOfWorksForWomen: string[];
    photo: string;
}
export type TeamState = {
    listOfTeam: MemberOfTeam[];
    loading: boolean;
    error: null | string;
}

