import { auth } from "@/auth";
import Link from "next/link";

const FavoritesLink = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <Link
      href={"/favorites"}
      className="text-white transition-all duration-200 hover:text-custome-green font-bold"
    >
      Favorites ♥️
    </Link>
  );
};

export default FavoritesLink;
