import { FavoriteType } from "../_lib/services";
import FavoriteItem from "./FavoriteItem";

interface FavoritesListPropsType {
  favorites: FavoriteType[];
}

const FavoritesList = ({ favorites }: FavoritesListPropsType) => {
  return (
    <ul>
      {favorites.map((favorite) => (
        <FavoriteItem favorite={favorite} key={favorite.id} />
      ))}
    </ul>
  );
};

export default FavoritesList;
