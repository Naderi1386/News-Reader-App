import { auth } from "@/auth";
import Link from "next/link";

const FavoritesLink = async () => {
  const session = await auth();
  if (!session) return null;
  return <Link href={"/favorites"}>Favorites ♥️</Link>;
};

export default FavoritesLink;
