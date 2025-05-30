import dynamic from "next/dynamic";
import { FavoriteType } from "../_lib/services";
const NewsPoster = dynamic(() => import("./NewsPoster"));
const RemoveFavBtn = dynamic(() => import("./RemoveFavBtn"));

interface FavoriteItemPropsType {
  favorite: FavoriteType;
  onDeleteFavoriteItem: (id: number) => void;
}

const FavoriteItem = ({
  favorite,
  onDeleteFavoriteItem,
}: FavoriteItemPropsType) => {
  const { title, img, description, link, id } = favorite;
  const shortTitle = title.split(" ").slice(0, 10).join(" ");
  const shortDescription = description
    ? description.split(" ").slice(0, 12).join(" ")
    : "......";
  return (
    <li className="w-full md:w-[30%] lg:w-[22%] h-[300px]">
      <RemoveFavBtn onDeleteFavoriteItem={onDeleteFavoriteItem} id={id} />
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
