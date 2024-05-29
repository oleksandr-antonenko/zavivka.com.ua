type Feature = {
    title?: string;
    text?: string;
}

export interface FeatureProps {
    features: Feature[];
    currentIndex: number;
}
