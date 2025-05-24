import { CurlSize, HairLength } from '@/components/zavivka/types';

export type Photo = {
  src: string;
  hairLength: HairLength;
  curlSize: CurlSize;
  master: string;
  colored: boolean;
  slug: string;
};

export const photos: Photo[] = [
  // Валентина Антоненко начало
  {
    src: '/images/valentina/valentina-1.webp',
    hairLength: 'За лопатки',
    curlSize: 'Середній',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-2.webp',
    hairLength: 'По пояс',
    curlSize: 'Великий',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-3.webp',
    hairLength: 'За лопатки',
    curlSize: 'Великий',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-4.webp',
    hairLength: 'По лопатки',
    curlSize: 'Середній',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-5.jpg',
    hairLength: 'Короткі',
    curlSize: 'Інтенсивний',
    master: 'Валентина Антоненко',
    colored: true,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-6.webp',
    hairLength: 'За лопатки',
    curlSize: 'Пляжна Хвиля',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-7.webp',
    hairLength: 'По плечі',
    curlSize: 'Середній',
    master: 'Валентина Антоненко',
    colored: true,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-8.webp',
    hairLength: 'За лопатки',
    curlSize: 'Пляжна Хвиля',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-9.webp',
    hairLength: 'По пояс',
    curlSize: 'Великий',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-10.webp',
    hairLength: 'За лопатки',
    curlSize: 'Пляжна Хвиля',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-11.webp',
    hairLength: 'За лопатки',
    curlSize: 'Інтенсивний',
    master: 'Валентина Антоненко',
    colored: true,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-12.webp',
    hairLength: 'За лопатки',
    curlSize: 'Інтенсивний',
    master: 'Валентина Антоненко',
    colored: true,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-13.webp',
    hairLength: 'По плечі',
    curlSize: 'Середній',
    master: 'Валентина Антоненко',
    colored: true,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-14.webp',
    hairLength: 'За лопатки',
    curlSize: 'Великий',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  {
    src: '/images/valentina/valentina-15.webp',
    hairLength: 'За лопатки',
    curlSize: 'Інтенсивний',
    master: 'Валентина Антоненко',
    colored: false,
    slug: 'valentina-antonenko',
  },
  // Валентина Антоненко конец

  // Артем начало
  {
    src: '/images/artem/artem-1.webp',
    hairLength: 'По лопатки',
    curlSize: 'Середній',
    master: 'Артем Сабо',
    colored: true,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-2.webp',
    hairLength: 'Короткі',
    curlSize: 'Великий',
    master: 'Артем Сабо',
    colored: false,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-3.webp',
    hairLength: 'По плечі',
    curlSize: 'Середній',
    master: 'Артем Сабо',
    colored: false,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-4.webp',
    hairLength: 'По плечі',
    curlSize: 'Середній',
    master: 'Артем Сабо',
    colored: false,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-5.webp',
    hairLength: 'По плечі',
    curlSize: 'Середній',
    master: 'Артем Сабо',
    colored: true,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-6.webp',
    hairLength: 'По лопатки',
    curlSize: 'Середній',
    master: 'Артем Сабо',
    colored: true,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-7.webp',
    hairLength: 'Короткі',
    curlSize: 'Великий',
    master: 'Артем Сабо',
    colored: false,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-8.webp',
    hairLength: 'По плечі',
    curlSize: 'Великий',
    master: 'Артем Сабо',
    colored: true,
    slug: 'sabo-artem',
  },
  {
    src: '/images/artem/artem-2.webp',
    hairLength: 'По плечі',
    curlSize: 'Інтенсивний',
    master: 'Артем Сабо',
    colored: true,
    slug: 'sabo-artem',
  },
  // Артем конец
];
