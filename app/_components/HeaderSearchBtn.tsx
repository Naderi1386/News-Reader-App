import { IoSearchOutline } from "react-icons/io5";
interface HeaderSearchBtnPropsType {
  onClick: () => void;
}

const HeaderSearchBtn = ({ onClick }: HeaderSearchBtnPropsType) => {
  return (
    <span
    onClick={onClick}
      role="button"
      className="cursor-pointer rounded-[100%] transition-all duration-300 border border-solid border-transparent p-2.5 hover:border-white"
    >
      <IoSearchOutline size={20} />
    </span>
  );
};

export default HeaderSearchBtn;
