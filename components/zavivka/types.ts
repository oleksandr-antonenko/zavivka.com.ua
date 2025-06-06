import { Service } from '@/store/type';

export interface ZavivkaChoice {
  serviceImages: Service;
  formen?: boolean;
  currentHeight: number;
  currentCurl?: number;
  onClickHeight?: (e: number) => void;
  onClickCurl?: (e: number) => void;
}

export type HairLength =
  | 'Коротке'
  | 'По плечі'
  | 'По лопатки'
  | 'За лопатки'
  | 'По пояс'
  | 'Всі';
export type CurlSize =
  | 'Інтенсивний'
  | 'Середній'
  | 'Великий'
  | 'Пляжна Хвиля'
  | 'Карвінг'
  | 'Всі';
export type Colored = 'Фарбоване' | 'Натуральне' | 'Всі';
