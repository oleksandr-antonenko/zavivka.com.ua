import { MainHeader, NavProps } from './main-header';
import { TopHeader } from './top-header';

export default function Header({
  navlinksTop,
  navlinks,
}: {
  navlinks?: NavProps[];
  navlinksTop?: NavProps[];
}) {
  return (
    <header>
      <div className="hidden md:flex md:justify-between w-full">
        <TopHeader navlinksTop={navlinksTop} />
      </div>
      <MainHeader navlinks={navlinks} />
    </header>
  );
}
