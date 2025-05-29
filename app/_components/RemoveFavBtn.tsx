"use client";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";

interface RemoveFavBtnPropsType {
  id: number;
  onDeleteFavoriteItem: (id: number) => void;
}
const RemoveFavBtn = ({ id, onDeleteFavoriteItem }: RemoveFavBtnPropsType) => {
  return (
    <div className="flex items-end justify-between py-1">
      <MdArrowRightAlt size={22} />
      <button
        onClick={() => onDeleteFavoriteItem(id)}
        className="cursor-pointer"
      >
        <MdOutlineDeleteOutline size={22} />
      </button>
    </div>
  );
};

export default RemoveFavBtn;
