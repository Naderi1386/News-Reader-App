import { getAllFavorites } from "../_lib/services";
import EmptyContent from "./EmptyContent";
import FavoritesList from "./FavoritesList";

const FavoritesContent = async () => {
  const favorites = await getAllFavorites();
  if (!favorites.length)
    return (
      <EmptyContent href="/news" linkText="See News">
        You have no favorites ):
      </EmptyContent>
    );
  return (
    <div className="bg-white px-4 md:px-18 py-18">
      <FavoritesList favorites={favorites} />
    </div>
  );
};

export default FavoritesContent;
