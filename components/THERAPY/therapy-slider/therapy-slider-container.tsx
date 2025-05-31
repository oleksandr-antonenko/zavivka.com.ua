'use client';
import PhotoSliderForAllPages from '../../ui/photo-slider-for-all-pages';
import { therapyPhotoSliderData } from './therapy-photo-slider-data';

const TherapySliderWrapper = () => {
  // Преобразуем массив объектов в массив путей к изображениям
  const photos = therapyPhotoSliderData.map((item) => item.image);

  return <PhotoSliderForAllPages photos={photos} />;
};

export default TherapySliderWrapper;
