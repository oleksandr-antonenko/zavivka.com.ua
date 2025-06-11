'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Hand, X, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';
import EraseCanvas from './EraseCanvas';
import { ImagePair } from './gallery-data';
import { useState, useEffect } from 'react';

export default function FullscreenErase({
  pair,
  onClose,
  currentIndex,
  totalPairs,
  onNext,
  onPrev,
}: {
  pair: ImagePair;
  onClose: () => void;
  currentIndex: number;
  totalPairs: number;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  // Добавляем обработчик ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Добавляем обработчики клавиш для навигации
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex flex-col"
      >
        {/* Шапка */}
        <div className="flex justify-between items-center p-4 bg-black/80">
          <div className="flex items-center gap-4">
            <h2 className="text-xl text-white">{'Порівняння'}</h2>
            <span className="text-white/70 text-sm">
              {currentIndex + 1} / {totalPairs}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-yellow-400 transition-colors"
            aria-label="Закрыть"
          >
            <X size={24} />
          </button>
        </div>

        {/* Основное содержимое */}
        <div className="relative flex-1 flex items-center justify-center p-4 overflow-hidden">
          {/* Кнопка "Предыдущее" */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="w-full h-full flex items-center justify-center">
            <EraseCanvas
              key={resetKey}
              beforeImage={pair.before}
              afterImage={pair.after}
            />
          </div>

          {/* Кнопка "Следующее" */}
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronRight size={32} />
          </button>

          {/* Подсказка */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 transform bg-black/70 text-white w-full max-w-[370px] px-6 py-3 rounded-full flex items-center justify-between pointer-events-none"
          >
            <Hand className="mr-2 animate-pulse" />
            <span className="text-[14px]">
              Стирайте область, щоб побачити різницю
            </span>
          </motion.div>
        </div>

        {/* Панель управления */}
        <div className="flex justify-center gap-4 p-4 bg-black/80">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <RotateCw size={18} />
            <span>Скинути</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
