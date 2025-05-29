"use client";
import { useState } from "react";
import { FavoriteType } from "../_lib/services";
import NewsPoster from "./NewsPoster";
import RemoveFavBtn from "./RemoveFavBtn";
import { AnimatePresence } from "framer-motion";

interface FavoriteItemPropsType {
  favorite: FavoriteType;
}

const FavoriteItem = ({ favorite }: FavoriteItemPropsType) => {
  const [isShow, setIsShow] = useState(false);
  const { title, img, description, link, id } = favorite;
  const shortTitle = title.split(" ").slice(0, 10).join(" ");
  const shortDescription = description
    ? description.split(" ").slice(0, 12).join(" ")
    : "......";
  return (
    <li
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="w-full md:w-[30%] lg:w-[22%] h-[300px]"
    >
      <AnimatePresence mode="wait">
        {isShow && <RemoveFavBtn id={id} />}
      </AnimatePresence>
      <div className="card bg-base-100 image-full w-full h-full shadow-sm">
        <figure className="relative w-full">
          <NewsPoster img={img} isRounded={false} isFull />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">{shortTitle}...</h2>
          <p>{shortDescription}...</p>
          <div className="card-actions justify-end">
            <a
              target="_blank"
              href={link}
              className="btn btn-md border-none outline-none bg-custome-green"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FavoriteItem;
