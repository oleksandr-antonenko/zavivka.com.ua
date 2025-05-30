import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';
import ReasonsAccordion from './reasonsAccordion';

const ReasonsContainer = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-2">
      <DecoratedTitle className="max-w-[361px] md:max-w-[790px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
        5 причин чому чоловіча завивка — це зручно, красиво та завжди актуально
      </DecoratedTitle>
      <ReasonsAccordion />
    </div>
  );
};

export default ReasonsContainer;
