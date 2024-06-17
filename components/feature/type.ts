export type FeatureT = {
    title?: string;
    text?: string;
}

export interface FeatureProps {
    features: FeatureT[];
    currentIndex: number;
}
