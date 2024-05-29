import {FeatureProps} from './type';

export function Feature({features, currentIndex}: FeatureProps){
    return (
     <>
        {features.map((feature, i) =>{
            return (
            <div className="max-w-[280px] sm:min-w-[285px] text-[16px] hidden md:block " key={`${feature.title}${i}`} style={{transform: `translate(-${currentIndex * 80}%)`}}>
                <div className="relative flex items-center pt-[12px]">
                    {feature.title && <div className={`absolute items-center justify-center top-[14px] w-5 h-5 rounded-full ${i === currentIndex ? "bg-orange" : "bg-grey-light"} ${currentIndex > 4 && i === 4 ? "bg-orange" : "bg-grey-light"}`}></div>}
                    <h4 className="font-bold pl-[40px] mb-[30px]">{feature.title}</h4>
                </div>
                <p className="w-full">{feature.text}</p>
            </div>
            )}
        )}
        {features.map((feature, i) =>{
            return (
            <div className="max-w-[280px] sm:min-w-[285px] text-[16px] hidden sm:block md:hidden " key={`${feature.title}${i}`} style={{transform: `translate(-${currentIndex * 105}%)`}}>
                <div className="relative flex items-center pt-[12px]">
                    {feature.title && <div className={`absolute items-center justify-center top-[14px] w-5 h-5 rounded-full ${i === currentIndex ? "bg-orange" : "bg-grey-light"} ${currentIndex > 4 && i === 4 ? "bg-orange" : "bg-grey-light"}`}></div>}
                    <h4 className="font-bold pl-[40px] mb-[30px]">{feature.title}</h4>
                </div>
                <p className="w-full">{feature.text}</p>
            </div>
            )}
        )}
        {features.map((feature, i) =>{
            return (
            <div className="max-w-[280px] sm:min-w-[285px] text-[16px] block sm:hidden md:hidden " key={`${feature.title}${i}`} style={{transform: `translate(-${currentIndex * 128}%)`}}>
                <div className="relative flex items-center pt-[12px]">
                    {feature.title && <div className={`absolute items-center justify-center top-[14px] w-5 h-5 rounded-full ${i === currentIndex ? "bg-orange" : "bg-grey-light"} ${currentIndex > 4 && i === 4 ? "bg-orange" : "bg-grey-light"}`}></div>}
                    <h4 className="font-bold pl-[40px] mb-[30px]">{feature.title}</h4>
                </div>
                <p className="w-full">{feature.text}</p>
            </div>
            )}
        )}
     </> 
    )
}
