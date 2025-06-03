import { plyazhnaKhvyliaListData } from './plyazhna-khvylia-data';

const PlyazhnaKhvyliaList = () => {
  return (
    <ul className="flex flex-col gap-[25px] md:gap-[16px]">
      {plyazhnaKhvyliaListData.map((item) => (
        <li key={item.id} className="flex items-center gap-8">
          <div className="text-[48px] md:text-[80px] text-white font-bold font-bannerBold">
            {item.count}
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] text-white font-bold">
              {item.title}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PlyazhnaKhvyliaList;
