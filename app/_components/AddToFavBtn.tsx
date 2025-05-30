"use client";
import { useRouter } from "next/navigation";
import { updateFavoritesRows } from "../_lib/actions";
import { AddedFavoriteType } from "../_lib/services";
import toast from "react-hot-toast";

interface AddToFavBtnPropsType {
  favorite: AddedFavoriteType;
  isAdded: boolean;
}

const AddToFavBtn = ({ favorite, isAdded }: AddToFavBtnPropsType) => {
  const router = useRouter();
  if (isAdded)
    return (
      <button
        onClick={() => router.push("/favorites")}
        title="Your Favorite New"
        className="btn btn-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="red"
          className="size-[1.2em]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    );
  return (
    <button
      title="Add To Favorites"
      onClick={() => {
        updateFavoritesRows(favorite);
        setTimeout(() => {
          toast.success("New Got Added To Your Favorites");
        }, 2000);
      }}
      className="btn btn-circle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="size-[1.2em]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  );
};

export default AddToFavBtn;
