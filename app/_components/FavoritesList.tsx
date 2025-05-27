import { FavoriteType } from "../_lib/services";

interface FavoritesListPropsType {
  favorites: FavoriteType[];
}

const FavoritesList = ({ favorites }: FavoritesListPropsType) => {
  return <ul>FavoritesList</ul>;
};

export default FavoritesList;
