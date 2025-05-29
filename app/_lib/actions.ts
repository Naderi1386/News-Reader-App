"use server";
import { signIn, signOut } from "@/auth";
import { AddedFavoriteType, addFavorite, deleteFavorite } from "./services";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const login = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};

export const updateFavoritesRows = async (favorite: AddedFavoriteType) => {
  await addFavorite(favorite);
  revalidatePath("/favorites");
  redirect("/favorites");
};

export const removeFav = async (id: number) => {
  await deleteFavorite(id);
  revalidatePath("/favorites");
};
