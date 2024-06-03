import { MainHeader } from "./main-header";
import { TopHeader } from "./top-header";

export default function Header() {
  return (
    <header>
        <div className="topHeader">
          <TopHeader/>
        </div>
        <MainHeader/>
    </header>
  );
}
