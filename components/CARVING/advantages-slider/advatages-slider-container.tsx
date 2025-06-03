'use client';
import PhotoSliderForAllPages from '../../ui/photo-slider-for-all-pages';
import { photos } from '@/components/zavivka/photos';

const AdvantagesSliderContainer = () => {
  const carvingPhotos = photos
    .filter((photo) => photo.curlSize === 'Карвінг')
    .map((photo) => photo.src);

  return <PhotoSliderForAllPages photos={carvingPhotos} />;
};

export default AdvantagesSliderContainer;
