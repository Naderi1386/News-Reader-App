import { getAllFavorites } from "../_lib/services";

const FavoritesContent = async () => {
  const favorites = await getAllFavorites();
  return <div className="bg-white px-4 md:px-18 py-18">FavoritesContent</div>;
};

export default FavoritesContent;
