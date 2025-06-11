'use client';

import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';
import { socialMasters } from './social-masters-data';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { generateStaticBlurData } from '@/lib/generateStaticBlurData';
import { motion } from 'framer-motion';

export default function SocialMasters() {
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DecoratedTitle className="max-w-[350px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
            Наші майстри в{' '}
            <a
              href="https://www.instagram.com/zavivka.com.ua?igsh=MXQwbGFub3lqcjJhZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7A908] hover:underline"
            >
              Instagram
            </a>
          </DecoratedTitle>
        </motion.div>

        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex gap-4 pb-4">
            {socialMasters.map((master, index) => (
              <motion.a
                key={master.id}
                href={master.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center min-w-[80px]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-[150px] h-[150px] mb-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743]">
                    <div className="absolute inset-[5px] rounded-full overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={master.photo}
                          alt={`${master.name} ${master.surname}`}
                          fill
                          quality={60}
                          blurDataURL={generateStaticBlurData()}
                          placeholder="blur"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.span
                  className="text-xs text-white text-center truncate w-full"
                  whileHover={{ color: '#D7A908' }}
                  transition={{ duration: 0.2 }}
                >
                  {master.name} {master.surname}
                </motion.span>
              </motion.a>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
