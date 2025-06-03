'use client';
import PhotoSliderForAllPages from '../../ui/photo-slider-for-all-pages';
import { photos } from '@/components/zavivka/photos';

const PlyazhnaKhvyliaSliderSliderContainer = () => {
  const plyazhnaKhvyliaPhotos = photos
    .filter((photo) => photo.curlSize === 'Пляжна Хвиля')
    .map((photo) => photo.src);
  return <PhotoSliderForAllPages photos={plyazhnaKhvyliaPhotos} />;
};

export default PlyazhnaKhvyliaSliderSliderContainer;
