import { auth } from "@/auth";
const FavoritesContent = dynamic(
  () => import("../_components/FavoritesContent")
);
const FavoritesTitleSection = dynamic(
  () => import("../_components/FavoritesTItleSection")
);
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
const FavoritesLength = dynamic(() => import("../_components/FavoritesLength"));
import dynamic from "next/dynamic";

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
