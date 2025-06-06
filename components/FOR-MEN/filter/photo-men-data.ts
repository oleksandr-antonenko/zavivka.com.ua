import { CurlSize, HairLength } from '@/components/zavivka/types';

export type Photo = {
  src: string;
  hairLength: HairLength;
  curlSize: CurlSize;
  master: string;
  colored: boolean;
  slug: string;
  id: string;
  recommendationLevel: 'top' | 'medium' | 'base' | 'not';
};

export const photosForMen: Photo[] = [
  // Анастасия Кузьменко начало
  {
    id: '1',
    src: '/images/foto-men/cholovicha-nastya-k-1.webp',
    hairLength: 'Короткі',
    curlSize: 'Інтенсивний',
    master: 'Анастасія Кузьменко',
    colored: false,
    slug: 'anastasia-kuzmenko',
    recommendationLevel: 'base',
  },
  {
    id: '2',
    src: '/images/foto-men/cholovicha-nastya-k-2.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Анастасія Кузьменко',
    colored: false,
    slug: 'anastasia-kuzmenko',
    recommendationLevel: 'base',
  },
  {
    id: '3',
    src: '/images/foto-men/cholovicha-nastya-k-3.webp',
    hairLength: 'Короткі',
    curlSize: 'Великий',
    master: 'Анастасія Кузьменко',
    colored: false,
    slug: 'anastasia-kuzmenko',
    recommendationLevel: 'base',
  },
  // Анастасия Кузьменко конец

  // Ольга Колле начало
  {
    id: '4',
    src: '/images/foto-men/cholovicha-olga-k-1.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Ольга Колле',
    colored: false,
    slug: 'olga-kolle',
    recommendationLevel: 'base',
  },
  {
    id: '5',
    src: '/images/foto-men/cholovicha-olga-k-2.webp',
    hairLength: 'Короткі',
    curlSize: 'Інтенсивний',
    master: 'Ольга Колле',
    colored: true,
    slug: 'olga-kolle',
    recommendationLevel: 'base',
  },
  {
    id: '6',
    src: '/images/foto-men/cholovicha-olga-k-3.webp',
    hairLength: 'Короткі',
    curlSize: 'Великий',
    master: 'Ольга Колле',
    colored: false,
    slug: 'olga-kolle',
    recommendationLevel: 'base',
  },
  {
    id: '7',
    src: '/images/foto-men/cholovicha-olga-k-4.webp',
    hairLength: 'Короткі',
    curlSize: 'Інтенсивний',
    master: 'Ольга Колле',
    colored: true,
    slug: 'olga-kolle',
    recommendationLevel: 'base',
  },
  {
    id: '8',
    src: '/images/foto-men/cholovicha-olga-k-5.webp',
    hairLength: 'По плечі',
    curlSize: 'Великий',
    master: 'Ольга Колле',
    colored: false,
    slug: 'olga-kolle',
    recommendationLevel: 'base',
  },
  {
    id: '9',
    src: '/images/foto-men/cholovicha-olga-k-6.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Ольга Колле',
    colored: false,
    slug: 'olga-kolle',
    recommendationLevel: 'base',
  },
  // Ольга Колле конец

  // Ярослава Гурбік начало
  {
    id: '10',
    src: '/images/foto-men/cholovicha-yaroslava-1.webp',
    hairLength: 'Короткі',
    curlSize: 'Великий',
    master: 'Ярослава Гурбік',
    colored: false,
    slug: 'yaroslava-gurbik',
    recommendationLevel: 'base',
  },
  {
    id: '11',
    src: '/images/foto-men/cholovicha-yaroslava-2.webp',
    hairLength: 'Короткі',
    curlSize: 'Інтенсивний',
    master: 'Ярослава Гурбік',
    colored: true,
    slug: 'yaroslava-gurbik',
    recommendationLevel: 'base',
  },
  {
    id: '12',
    src: '/images/foto-men/cholovicha-yaroslava-3.webp',
    hairLength: 'По плечі',
    curlSize: 'Інтенсивний',
    master: 'Ярослава Гурбік',
    colored: true,
    slug: 'yaroslava-gurbik',
    recommendationLevel: 'base',
  },
  // Ярослава Гурбік конец

  // Валерія Мельниченко начало
  {
    id: '13',
    src: '/images/foto-men/cholovicha-valeria-1.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Валерія Мельниченко',
    colored: true,
    slug: 'valeria-melnichenko',
    recommendationLevel: 'base',
  },
  {
    id: '14',
    src: '/images/foto-men/cholovicha-valeria-2.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Валерія Мельниченко',
    colored: false,
    slug: 'valeria-melnichenko',
    recommendationLevel: 'base',
  },
  {
    id: '15',
    src: '/images/foto-men/cholovicha-valeria-3.webp',
    hairLength: 'Короткі',
    curlSize: 'Великий',
    master: 'Валерія Мельниченко',
    colored: false,
    slug: 'valeria-melnichenko',
    recommendationLevel: 'base',
  },
  {
    id: '16',
    src: '/images/foto-men/cholovicha-valeria-4.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Валерія Мельниченко',
    colored: true,
    slug: 'valeria-melnichenko',
    recommendationLevel: 'base',
  },
  {
    id: '17',
    src: '/images/foto-men/cholovicha-valeria-5.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Валерія Мельниченко',
    colored: false,
    slug: 'valeria-melnichenko',
    recommendationLevel: 'base',
  },
  // Валерія Мельниченко конец

  // Настя Мальчик начало
  {
    id: '18',
    src: '/images/foto-men/cholovicha-nastya-m-1.webp',
    hairLength: 'Короткі',
    curlSize: 'Інтенсивний',
    master: 'Анастасія Мальчик',
    colored: false,
    slug: 'anastasiya-malchik',
    recommendationLevel: 'base',
  },
  // Настя Мальчик конец

  // Діана Лєканцева начало
  {
    id: '19',
    src: '/images/foto-men/cholovicha-diana-1.webp',
    hairLength: 'Короткі',
    curlSize: 'Середній',
    master: 'Діана Лєканцева',
    colored: false,
    slug: 'diana-lekanceva',
    recommendationLevel: 'base',
  },
  // Діана Лєканцева конец

  // Вікторія Салій начало
  {
    id: '20',
    src: '/images/foto-men/cholovicha-vika-s-1.webp',
    hairLength: 'По плечі',
    curlSize: 'Середній',
    master: 'Вікторія Салій',
    colored: true,
    slug: 'viktoriya-salyi',
    recommendationLevel: 'base',
  },
  {
    id: '21',
    src: '/images/foto-men/cholovicha-vika-s-2.webp',
    hairLength: 'По лопатки',
    curlSize: 'Середній',
    master: 'Вікторія Салій',
    colored: true,
    slug: 'viktoriya-salyi',
    recommendationLevel: 'base',
  },
  {
    id: '22',
    src: '/images/foto-men/cholovicha-vika-s-3.webp',
    hairLength: 'Короткі',
    curlSize: 'Великий',
    master: 'Вікторія Салій',
    colored: false,
    slug: 'viktoriya-salyi',
    recommendationLevel: 'base',
  },
  {
    id: '23',
    src: '/images/foto-men/cholovicha-vika-s-4.webp',
    hairLength: 'По плечі',
    curlSize: 'Великий',
    master: 'Вікторія Салій',
    colored: true,
    slug: 'viktoriya-salyi',
    recommendationLevel: 'base',
  },
  // Вікторія Салій конец
];
