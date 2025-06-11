'use client';

import { useState } from 'react';
import ImageCard from './ImageCard';
import FullscreenErase from './FullscreenErase';
import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';
import { imagePairs } from './gallery-data';
import { motion } from 'framer-motion';

export default function BeforeAfterGallery() {
  const [currentPairIndex, setCurrentPairIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (currentPairIndex !== null) {
      // Если достигли конца, возвращаемся к началу
      setCurrentPairIndex((currentPairIndex + 1) % imagePairs.length);
    }
  };

  const handlePrev = () => {
    if (currentPairIndex !== null) {
      // Если достигли начала, переходим к концу
      setCurrentPairIndex(
        (currentPairIndex - 1 + imagePairs.length) % imagePairs.length,
      );
    }
  };

  return (
    <div className="bg-transparent min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DecoratedTitle className="max-w-[271px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
            До та після: еволюція образу
          </DecoratedTitle>
          <p className="text-[16px] md:text-[24px] text-[#fbfbfb] text-center md:text-start max-w-[600px]">
            Натисніть на зображення та стирайте верхній шар, щоб побачити
            трансформацію
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {imagePairs.map((pair, index) => (
            <motion.div
              key={`${pair.before}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ImageCard
                pair={pair}
                onClick={() => setCurrentPairIndex(index)}
              />
            </motion.div>
          ))}
        </div>

        {currentPairIndex !== null && (
          <FullscreenErase
            pair={imagePairs[currentPairIndex]}
            onClose={() => setCurrentPairIndex(null)}
            currentIndex={currentPairIndex}
            totalPairs={imagePairs.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </div>
    </div>
  );
}
