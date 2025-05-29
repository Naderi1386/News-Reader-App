"use client";
import { useOptimistic, useTransition } from "react";
import { FavoriteType } from "../_lib/services";
import FavoriteItem from "./FavoriteItem";
import { removeFav } from "../_lib/actions";

interface FavoritesListPropsType {
  favorites: FavoriteType[];
}

const FavoritesList = ({ favorites }: FavoritesListPropsType) => {
  const [optimisticFavorites, deleteFav] = useOptimistic(
    favorites,
    (fav, id: number) => {
      return fav.filter((fav) => fav.id !== id);
    }
  );
  const transition = useTransition();

  const onDeleteFavoriteItem = (id: number) => {
    transition[1](() => deleteFav(id));

    removeFav(id);
  };
  if (!optimisticFavorites.length) return null;
  return (
    <ul className="flex flex-wrap gap-12 justify-between items-stretch">
      {optimisticFavorites.map((favorite) => (
        <FavoriteItem
          onDeleteFavoriteItem={onDeleteFavoriteItem}
          favorite={favorite}
          key={favorite.id}
        />
      ))}
    </ul>
  );
};

export default FavoritesList;
