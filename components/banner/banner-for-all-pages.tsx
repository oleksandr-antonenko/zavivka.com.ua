import TypingHeader from '../ui/typing-header';

interface BannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  videoSrc: string;
  posterSrc: string;
}

const BannerForAllPages = ({
  title,
  description,
  buttonText,
  buttonLink,
  videoSrc,
  posterSrc,
}: BannerProps) => {
  return (
    <section className="w-full relative">
      <div className="flex max-w-[1440px] 2xl:mx-auto flex-col px-2 py-[60px] md:py-[195px] w-full h-[800px]">
        <div className="text-2xl text-white">
          <TypingHeader text={title} />
        </div>

        <p className="mb-[23px] md:mb-[100px] w-full max-w-[360px] mx-auto md:mx-0 mt-auto md:mt-0 text-center text-[20px] md:text-start">
          {description}
        </p>

        <a href={buttonLink} target="_blank">
          <button className="rounded-[40px] h-[56px] flex justify-center items-center text-[#212121] text-[20px] w-full max-w-[361px] mx-auto md:mx-0 transition duration-300 bg-[#D7A908] hover:bg-[#f8cf38]">
            {buttonText}
          </button>
        </a>
        <video
          className="absolute z-[-10] top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default BannerForAllPages;
