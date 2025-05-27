import { auth } from "@/auth";
import FavoritesContent from "../_components/FavoritesContent";
import FavoritesTitleSection from "../_components/FavoritesTItleSection";

export const generateMetadata = async () => {
  const session = await auth();
  if (!session)
    return {
      title: "Favorites News",
    };
  const { user } = session;
  return {
    title: `News (${user?.name?.toUpperCase()})`,
  };
};

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
