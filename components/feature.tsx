import {FeatureProps} from "@/app/interfaces/feature-props";

export function Feature({title, text}: FeatureProps){
    return (
        <div className="feature">
            <div className="feature-title">
                <span className="feature-circle"></span>
                <h4 className="font-bold">
                    {title}
                </h4>
            </div>
            <p className="text-sm">{text}</p>
        </div>
    )
}
