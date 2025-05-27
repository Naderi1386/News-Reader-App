import dynamic from "next/dynamic";
import HeaderProfile from "./HeaderProfile";
const HeaderContent = dynamic(() => import("./HeaderContent"));

const Header = () => {
  return (
    <header className="bg-custome-dark px-4 md:px-18 py-3 border-b-2 border-solid border-custome-green sticky top-0 z-[10000]">
      <HeaderContent>
        <HeaderProfile />
      </HeaderContent>
    </header>
  );
};

export default Header;
