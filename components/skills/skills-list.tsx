import { skills } from './skills-data';

const SkillsList = () => {
  return (
    <ul className="flex flex-col items-center justify-center md:flex-wrap md:flex-row lg:flex-nowrap lg:justify-between gap-[25px] md:gap-[16px]">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className="flex flex-col items-center justify-center gap-2"
        >
          <span className="text-[48px] md:text-[80px] text-white font-bold font-bannerBold">
            {skill.count}
          </span>
          <div>
            <h3 className="text-center text-[20px] md:text-[24px] text-white font-bold md:mb-[30px]">
              {skill.title}
            </h3>
            <p className="text-center text-[16px] text-white md:max-w-[220px] mx-auto">
              {skill.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
