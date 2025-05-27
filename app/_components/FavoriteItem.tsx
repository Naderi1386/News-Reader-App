import Image from "next/image";
import { FavoriteType } from "../_lib/services";
import NewsPoster from "./NewsPoster";

interface FavoriteItemPropsType {
  favorite: FavoriteType;
}

const FavoriteItem = ({ favorite }: FavoriteItemPropsType) => {
  const { title, img } = favorite;

  return (
    <li>
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure className="relative w-full">
          <NewsPoster img={img} isRounded={false} isFull />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FavoriteItem;
