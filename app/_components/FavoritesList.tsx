import { useOptimistic } from "react";
import { FavoriteType } from "../_lib/services";
import FavoriteItem from "./FavoriteItem";

interface FavoritesListPropsType {
  favorites: FavoriteType[];
}

const FavoritesList = ({ favorites }: FavoritesListPropsType) => {
  const [optimisticFavorites, deleteFav] = useOptimistic(
    favorites,
    (fav, id: number) => fav.filter((fav) => fav.id !== id)
  );

  return (
    <ul className="flex flex-wrap gap-12 justify-between items-stretch">
      {optimisticFavorites.map((favorite) => (
        <FavoriteItem favorite={favorite} key={favorite.id} />
      ))}
    </ul>
  );
};

export default FavoritesList;
