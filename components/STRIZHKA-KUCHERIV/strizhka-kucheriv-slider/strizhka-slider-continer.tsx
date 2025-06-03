'use client';
import PhotoSliderForAllPages from '../../ui/photo-slider-for-all-pages';
import { strizhkaPhotoSliderData } from './strizhka-slider-data';

const StrizhkaSliderContiner = () => {
  const plyazhnaKhvyliaPhotos = strizhkaPhotoSliderData.map(
    (photo) => photo.image,
  );
  return <PhotoSliderForAllPages photos={plyazhnaKhvyliaPhotos} />;
};

export default StrizhkaSliderContiner;
