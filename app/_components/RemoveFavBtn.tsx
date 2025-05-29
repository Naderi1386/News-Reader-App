"use client";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface RemoveFavBtnPropsType {
  id: number;
}
const RemoveFavBtn = ({ id }: RemoveFavBtnPropsType) => {
  return (
    <div className="flex justify-end py-2">
      <button className="cursor-pointer">
        <MdOutlineDeleteOutline size={22} />
      </button>
    </div>
  );
};

export default RemoveFavBtn;
