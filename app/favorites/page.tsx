import FavoritesContent from "../_components/FavoritesContent";
import FavoritesTitleSection from "../_components/FavoritesTItleSection";

const page = () => {
  return (
    <div className="text-black">
      <div>
        <FavoritesTitleSection />
        <FavoritesContent />
      </div>
    </div>
  );
};

export default page;
