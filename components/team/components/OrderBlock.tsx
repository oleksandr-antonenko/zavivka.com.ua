import { Button } from '@/shared/buttons';
import React from 'react';

const OrderBlock = () => {
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
      <Button className="text-black bg-white w-full max-w-full md:max-w-[400px]">
        Запис на консультацію
      </Button>
    </div>
  );
};

export default OrderBlock;
