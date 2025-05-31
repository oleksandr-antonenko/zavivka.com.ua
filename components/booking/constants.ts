import { ServiceCheckbox } from './types';

const baseServices: ServiceCheckbox[] = [
  { name: 'zavivka', title: 'Біозавивка волосся' },
  { name: 'treatment', title: 'Японське лікування волосся' },
  { name: 'beachWave', title: 'Біозавивка "Пляжна хвиля"' },
  { name: 'curlyCut', title: 'Стрижка кучерявого волосся' },
  { name: 'carving', title: 'Карвінг волосся' },
  { name: 'color', title: 'Фарбування' },
];

const correctionService: ServiceCheckbox = {
  name: 'korektsiya',
  title: 'Корекція завивки',
};

export const servicesForCheckboxWomen = baseServices;
export const servicesForCheckboxWomenWithCorrection = [
  ...baseServices,
  correctionService,
];

export const servicesForCheckboxMen: ServiceCheckbox[] = [
  { name: 'zavivka', title: 'Біозавивка волосся' },
  { name: 'haircut', title: 'Стрижка кучерявого волосся' },
  { name: 'treatment', title: 'Лікування волосся' },
  { name: 'diffuser', title: 'Укладка на дифузор' },
];

export const servicesForCheckboxHaircut: ServiceCheckbox[] = [
  { name: 'zavivka', title: 'Біозавивка волосся' },
  { name: 'haircut', title: 'Стрижка кучерявого волосся' },
  { name: 'color', title: 'Фарбування волосся' },
  { name: 'treatment', title: 'Лікування волосся' },
  { name: 'diffuser', title: 'Укладка на дифузор' },
];
