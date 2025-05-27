import { auth } from "@/auth";

const FavoritesTitleSection = async () => {
  const session = await auth();
  if (!session) return null;
  return <div className="bg-custome-green text-white">
    
  </div>;
};

export default FavoritesTitleSection;
