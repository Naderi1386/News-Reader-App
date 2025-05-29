import { FavoriteType } from "../_lib/services";
import FavoriteItem from "./FavoriteItem";

interface FavoritesListPropsType {
  favorites: FavoriteType[];
}

const FavoritesList = ({ favorites }: FavoritesListPropsType) => {
  return (
    <ul className="flex flex-wrap gap-12 justify-between items-stretch">
      {favorites.map((favorite) => (
        <FavoriteItem favorite={favorite} key={favorite.id} />
      ))}
    </ul>
  );
};

export default FavoritesList;
