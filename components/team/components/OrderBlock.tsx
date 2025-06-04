import { Button } from '@/shared/buttons';
import { useState } from 'react';
import PopUpBanner from '@/components/pop-up/PopUpBanner';

const OrderBlock = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <div className="relative z-10 flex flex-col md:flex-row gap-5">
      <a
        href="https://beautyprosoftware.com/b/877643"
        target="_blank"
        className="w-full max-w-full md:max-w-[400px]"
      >
        <Button className="w-full transition duration-300 bg-[#D7A908] hover:bg-[#f8cf38]">
          Запис онлайн
        </Button>
      </a>
      <Button
        className="text-black bg-white w-full max-w-full md:max-w-[400px]"
        onClick={() => setIsPopUpOpen(true)}
      >
        Запис на консультацію
      </Button>

      <PopUpBanner
        visible={isPopUpOpen}
        close={() => setIsPopUpOpen(false)}
        forMen={false}
      />
    </div>
  );
};

export default OrderBlock;
