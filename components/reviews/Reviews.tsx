'use client';
import Review from '@/components/reviews/Review';
import { useAppSelector } from '@/store/hook';
import DecoratedTitle from '../ui/decorated-title/decorated-title';

const Reviews = () => {
  const reviews = useAppSelector((state) => state.feedbacks.listFeedback);

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <div className="relative">
        <div className="circle-grey circle-middle circle-up-right right-0 top-0"></div>
        <div className="circle-grey circle-small circle-left left-0 top-0"></div>
        <DecoratedTitle className="max-w-[250px] mx-auto md:mx-0 md:max-w-[700px] mb-[20px]">
          Відгуки <br /> наших клієнтів
        </DecoratedTitle>
        <p className="mb-[40px] md:mb-[60px] text-center text-[16px] sm:text-nowrap md:text-start">
          А ще більше вражень в{' '}
          <a
            href="https://www.instagram.com/zavivka.com.ua?igsh=MXQwbGFub3lqcjJhZg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7A908] hover:underline"
          >
            Instagram
          </a>{' '}
          та{' '}
          <a
            href="https://g.co/kgs/HM6P1Wj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7A908] hover:underline"
          >
            Google
          </a>
        </p>
        <Review reviews={reviews} />
      </div>
    </section>
  );
};

export default Reviews;
