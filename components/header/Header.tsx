import { TopHeader } from "./top-header";
import { MainHeader } from "./main-header";

export default function Header() {
  return (
    <header>
      <div className="hidden md:block">
        <TopHeader />
      </div>
      <MainHeader />
    </header>
  );
}
