import HeaderSearchBtn from "./HeaderSearchBtn";
import Navigation from "./Navigation";

const HeaderContent = () => {
  return (
    <div className="flex items-center justify-between">
      <Navigation />
      <HeaderSearchBtn />
    </div>
  );
};

export default HeaderContent;
