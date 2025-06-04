import { getMasterExperience } from './experience';

export interface Master {
  name: string;
  slug: string;
  category: string;
  experience: string;
  photo: string;
}

export const masters: Master[] = [
  {
    name: 'Валентина Антоненко',
    slug: 'valentina-antonenko',
    category: 'Директор',
    experience: getMasterExperience('Валентина Антоненко'),
    photo: '/images/teamMember.jpg',
  },
  {
    name: 'Сабо Артем',
    slug: 'sabo-artem',
    category: 'Топ майстер',
    experience: getMasterExperience('Сабо Артем'),
    photo: '/images/sabo-artem.jpg',
  },
  {
    name: 'Валерія Мельниченко',
    slug: 'valeria-melnichenko',
    category: 'Експерт',
    experience: getMasterExperience('Валерія Мельниченко'),
    photo: '/images/valeria-melnichenko.jpg',
  },
  {
    name: 'Юлія Броварчук',
    slug: 'yulia-brovarkchuk',
    category: 'Топ майстер',
    experience: getMasterExperience('Юлія Броварчук'),
    photo: '/images/yulia-brovarkchuk.jpg',
  },
  {
    name: 'Ольга Колле',
    slug: 'olga-kolle',
    category: 'Топ майстер',
    experience: getMasterExperience('Ольга Колле'),
    photo: '/images/olga-kolle.jpg',
  },
  {
    name: 'Анастасія Мальчик',
    slug: 'anastasiya-malchik',
    category: 'Експерт',
    experience: getMasterExperience('Анастасія Мальчик'),
    photo: '/images/anastasiya-malchik.jpg',
  },
  {
    name: 'Вікторія Омельченко',
    slug: 'viktoriya-omelchenko',
    category: 'Арт-директор',
    experience: getMasterExperience('Вікторія Омельченко'),
    photo: '/images/viktoriya-omelchenko.jpg',
  },
  {
    name: 'Вікторія Салій',
    slug: 'viktoriya-salyi',
    category: 'Арт-директор',
    experience: getMasterExperience('Вікторія Салій'),
    photo: '/images/viktoriya-salyi.jpg',
  },
  {
    name: 'Діана Лєканцева',
    slug: 'diana-lekanceva',
    category: 'Експерт',
    experience: getMasterExperience('Діана Лєканцева'),
    photo: '/images/diana-lekanceva.jpg',
  },
  {
    name: 'Ярослава Гурбік',
    slug: 'yaroslava-gurbik',
    category: 'Арт-директор',
    experience: getMasterExperience('Ярослава Гурбік'),
    photo: '/images/yaroslava-gurbik.jpg',
  },
  {
    name: 'Анастасія Кузьменко',
    slug: 'anastasia-kuzmenko',
    category: 'Арт-директор',
    experience: getMasterExperience('Анастасія Кузьменко'),
    photo: '/images/kuzmenko.webp',
  },
];
