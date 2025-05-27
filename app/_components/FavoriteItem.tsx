import Image from "next/image";
import { FavoriteType } from "../_lib/services";
import NewsPoster from "./NewsPoster";

interface FavoriteItemPropsType {
  favorite: FavoriteType;
}

const FavoriteItem = ({ favorite }: FavoriteItemPropsType) => {
  const { title, img, description } = favorite;
  const shortTitle = title.split(" ").slice(0, 10).join(" ");
  const shortDescription = description ?description.split(" ").slice(0, 12).join(" ") : "Nothing"
  return (
    <li className="w-[22%]">
      <div className="card bg-base-100 image-full w-full shadow-sm">
        <figure className="relative w-full">
          <NewsPoster img={img} isRounded={false} isFull />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">{shortTitle}...</h2>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FavoriteItem;
