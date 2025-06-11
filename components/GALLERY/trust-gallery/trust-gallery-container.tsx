import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';
import TrustGalleryList from './trust-gallery-list';

const TrustGalleryContainer = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-2">
      <DecoratedTitle className="w-full max-w-[550px] flex justify-center mx-auto xl:mx-0 mb-[30px] md:mb-[54px]">
        ЧОМУ НАМ МОЖНА ДОВІРЯТИ?
      </DecoratedTitle>
      <p className="text-[16px] md:text-[24px] text-[#fbfbfb] text-center xl:text-start max-w-[600px] mb-[30px] md:mb-[54px] mx-auto xl:mx-0">
        Ми відговоримо від завивки, якщо вам, або вашому волоссю вона не підійде
      </p>
      <TrustGalleryList />
    </div>
  );
};

export default TrustGalleryContainer;
