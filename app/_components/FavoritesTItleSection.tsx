import { auth } from "@/auth";
import FavoritesAvatar from "./FavoritesAvatar";

const FavoritesTitleSection = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <div className="bg-custome-green text-white">
      <div className="flex items-center gap-8">
        <FavoritesAvatar url={String(session.user?.image)} />
      </div>
    </div>
  );
};

export default FavoritesTitleSection;
