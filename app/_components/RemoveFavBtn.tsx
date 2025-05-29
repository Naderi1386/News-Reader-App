"use client";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";

import { removeFav } from "../_lib/actions";

interface RemoveFavBtnPropsType {
  id: number;
}
const RemoveFavBtn = ({ id }: RemoveFavBtnPropsType) => {
  return (
    <div className="flex items-end justify-between py-1">
      <MdArrowRightAlt size={22} />
      <button onClick={() => removeFav(id)} className="cursor-pointer">
        <MdOutlineDeleteOutline size={22} />
      </button>
    </div>
  );
};

export default RemoveFavBtn;
