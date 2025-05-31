'use client';

import CurlPhotoSlider from '../../ui/photo-slider-for-all-pages';
import { photoSliderData } from './curl-photo-slider-data';

const CurlSliderWrapper = () => {
  // Преобразуем массив объектов в массив путей к изображениям
  const photos = photoSliderData.map((item) => item.image);

  return <CurlPhotoSlider photos={photos} />;
};

export default CurlSliderWrapper;
