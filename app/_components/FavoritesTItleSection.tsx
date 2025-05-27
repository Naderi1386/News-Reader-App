import { auth } from "@/auth";
import FavoritesAvatar from "./FavoritesAvatar";

const FavoritesTitleSection = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <div className="bg-custome-green text-white px-4 md:px-18 py-18">
      <div className="flex items-center gap-8">
        <FavoritesAvatar url={String(session.user?.image)} />
        <h1 className="text-2xl font-semibold ">
          Favorites news of{" "}
          <span className="font-bold text-3xl capitalize">{session.user?.name}</span>
        </h1>
      </div>
    </div>
  );
};

export default FavoritesTitleSection;
