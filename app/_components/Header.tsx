import dynamic from "next/dynamic";
const HeaderContent = dynamic(() => import("./HeaderContent"));

const Header = () => {
  return (
    <header className="bg-custome-dark px-4 md:px-18 py-3 border-b-2 border-solid border-custome-green sticky top-0">
      <HeaderContent />
    </header>
  );
};

export default Header;
