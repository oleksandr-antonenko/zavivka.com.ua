import { signalListData } from './signal-list-data';

const SignalList = () => {
  return (
    <ul className="flex flex-col gap-[25px] md:gap-[16px]">
      {signalListData.map((skill) => (
        <li key={skill.id} className="flex items-center gap-8">
          <div className="text-[48px] md:text-[80px] text-white font-bold font-bannerBold">
            {skill.count}
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] text-white font-bold">
              {skill.title}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SignalList;
