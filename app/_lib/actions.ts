"use server";
import { auth, signIn, signOut } from "@/auth";
import { AddedFavoriteType, addFavorite, deleteFavorite } from "./services";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export const login = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};

export const updateFavoritesRows = async (favorite: AddedFavoriteType) => {
  const session = await auth();
  if (!session) return null;
  await addFavorite(favorite);
  revalidatePath("/favorites");
  toast.success(`News Added From Your Favorites`);
};

export const removeFav = async (id: number) => {
  const session = await auth();
  if (!session) return null;
  await deleteFavorite(id);
  revalidatePath("/favorites");
  toast.error(`News ID ${id} Got Deleted From Your Favorites`);
};
