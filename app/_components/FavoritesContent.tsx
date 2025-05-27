import { getAllFavorites } from "../_lib/services";
import FavoritesList from "./FavoritesList";

const FavoritesContent = async () => {
  const favorites = await getAllFavorites();
  if (!favorites.length) return null;
  return (
    <div className="bg-white px-4 md:px-18 py-18">
      <FavoritesList favorites={favorites} />
    </div>
  );
};

export default FavoritesContent;
