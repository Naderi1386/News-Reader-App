import { auth } from "@/auth";
import FavoritesContent from "../_components/FavoritesContent";
import FavoritesTitleSection from "../_components/FavoritesTItleSection";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import FavoritesLength from "../_components/FavoritesLength";

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
        <Suspense
          fallback={
            <div className="py-18">
              <Spinner />
            </div>
          }
        >
          <FavoritesContent />
        </Suspense>
        <FavoritesLength />
      </div>
    </div>
  );
};

export default page;
