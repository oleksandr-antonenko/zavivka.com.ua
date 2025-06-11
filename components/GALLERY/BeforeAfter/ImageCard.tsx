'use client';

import { Hand } from 'lucide-react';
import { ImagePair } from './gallery-data';
import Image from 'next/image';
import { generateStaticBlurData } from '@/lib/generateStaticBlurData';

export default function ImageCard({
  pair,
  onClick,
}: {
  pair: ImagePair;
  onClick: () => void;
}) {
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] shadow-[0_0_20px_rgba(0,0,0,0.2)]"
      onClick={onClick}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {/* Изображение "after" */}
        <Image
          src={pair.after}
          alt="После"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          quality={60}
          blurDataURL={generateStaticBlurData()}
          placeholder="blur"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="absolute inset-0 flex items-end p-4">
        <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent w-full h-1/2 absolute bottom-0 left-0" />
        <div className="relative z-10 text-white">
          <h3 className="font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {'до та після'}
          </h3>
          <div className="flex items-center mt-2 opacity-100 transition-opacity">
            <Hand className="mr-2 h-4 w-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
            <span className="text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Натисніть для порівняння
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
