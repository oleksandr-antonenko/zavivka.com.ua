import PlyazhnaKhvyliaList from './plyazhna-khvylia-list';
import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';

const PlyazhnaKhvyliaListContainer = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <div className="circle-grey top-0 right-[-50px] circle-right md:hidden"></div>
      <DecoratedTitle className="max-w-[361px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
        5 причини <br />
        обрати саме пляжні локони
      </DecoratedTitle>
      <PlyazhnaKhvyliaList />
      <div className="circle-grey bottom-[-30%] left-[-700px]"></div>
    </section>
  );
};

export default PlyazhnaKhvyliaListContainer;
