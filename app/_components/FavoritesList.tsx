import { FavoriteType } from "../_lib/services";
import FavoriteItem from "./FavoriteItem";

interface FavoritesListPropsType {
  favorites: FavoriteType[];
}

const FavoritesList = ({ favorites }: FavoritesListPropsType) => {
  return (
    <ul>
      {favorites.map((favorite, index) => (
        <FavoriteItem favorite={favorite} key={index + 1} />
      ))}
    </ul>
  );
};

export default FavoritesList;
