'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { X } from 'lucide-react';
import { useScrollLock } from '@/lib/hooks/useScrollLock';
import { useAnimation } from '@/lib/hooks/useAnimation';

interface PopUpBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const PopUpBanner = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}: PopUpBannerProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { isAnimating, setIsAnimating } = useAnimation();
  useScrollLock(isOpen);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-500 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close banner"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/2 aspect-[4/3]">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600 mb-6">{description}</p>
              <Link
                href={buttonLink}
                className="inline-block px-6 py-3 bg-[#D7A908] text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpBanner;
