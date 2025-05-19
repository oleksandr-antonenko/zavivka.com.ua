'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { titles } from './consultation-data';

const ConsultationDesktop = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const currentIndex = activeIndex;

  return (
    <div className="flex gap-[90px] w-full h-[500px]">
      {/* Левая колонка — список */}
      <div className="w-1/2 flex flex-col justify-center gap-6">
        {titles.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex items-center gap-3 py-[10px] text-left text-[24px] text-[#fbfbfb] font-bold transition-all duration-200 ${
                isActive ? 'border-b-[3px] border-b-[#d7a908]' : ''
              }`}
            >
              <span
                className={`w-3 h-3 min-w-[12px] min-h-[12px] shrink-0 rounded-full transition-colors duration-200 ${
                  isActive ? 'bg-[#d7a908]' : 'bg-gray-300'
                }`}
              ></span>
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Правая колонка — изображение */}
      <div className="w-1/2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Рамка */}
            <div
              className="w-[100%] h-[100%] rounded-[20px] border-[1px] border-[#d7a908] p-[30px]"
              style={{ perspective: '1000px' }}
            >
              {/* Изображение с flip-анимацией */}
              <motion.div
                key={titles[currentIndex].image} // ключ для корректной смены
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                className="relative w-full h-full rounded-[20px] overflow-hidden"
              >
                <Image
                  src={titles[currentIndex].image}
                  alt={titles[currentIndex].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ConsultationDesktop;
