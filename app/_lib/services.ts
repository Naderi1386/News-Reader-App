import { supabase } from "./supabase";

export interface NewsType {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface ResponseType {
  status: string;
  totalResults: number;
  articles: NewsType[];
}
export const getBBCNews = async (page: string) => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "sources=bbc-news&" +
    `page=${page}&` +
    "pageSize=10&" +
    `apiKey=${process.env.API_KEY}`;
  const req = new Request(url);
  try {
    const request = await fetch(req);
    const response = await request.json();
    return response as ResponseType;
  } catch (error) {
    console.error(error);
    throw new Error("BBC News Could Not Be Loaded !");
  }
};

export const getUSNews = async (page: string,pageSize:string) => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    `page=${page}&` +
    `pageSize=${pageSize}&` +
    `apiKey=${process.env.API_KEY}`;
  const req = new Request(url);
  try {
    const request = await fetch(req);
    const response = await request.json();
    return response as ResponseType;
  } catch (error) {
    console.error(error);
    throw new Error("United States News Could Not Be Loaded !");
  }
};

export const getNewsByCategory = async (category: string, page: string) => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    `category=${category}&` +
    `page=${page}&` +
    "pageSize=10&" +
    `apiKey=${process.env.API_KEY}`;
  const req = new Request(url);
  try {
    const request = await fetch(req);
    const response = await request.json();
    return response as ResponseType;
  } catch (error) {
    console.error(error);
    throw new Error(`${category.toUpperCase()} News Could Not Be Loaded !`);
  }
};

export const getSearchedNews = async (q: string, page: string) => {
  const url =
    "https://newsapi.org/v2/everything?" +
    `q=${q}&` +
    `page=${page}&` +
    "pageSize=11&" +
    `apiKey=${process.env.API_KEY}`;

  const req = new Request(url);
  try {
    const request = await fetch(req);
    const response = await request.json();
    return response as ResponseType;
  } catch (error) {
    console.error(error);
    throw new Error(`${q.toUpperCase()} Searched News Could Not Be Loaded !`);
  }
};

export interface FavoriteType {
  id: number;
  title: string;
  description: string;
  content: string;
  img: string;
  link: string;
}

export const getAllFavorites = async () => {
  const { data: favorites, error } = await supabase
    .from("favorites")
    .select("*");
  if (error) {
    console.error(error);
  }
  return favorites as FavoriteType[];
};

export const deleteFavorite = async (id: number) => {
  const { error } = await supabase.from("favorites").delete().eq("id", id);
  if (error) {
    console.error(error);
    return error;
  }
};

export interface AddedFavoriteType {
  title: string;
  description: string;
  content: string;
  img: string;
  link: string;
}

export const addFavorite = async (fav: AddedFavoriteType) => {
  const { error } = await supabase.from("favorites").insert([fav]);
  if (error) {
    console.error(error);
    return error;
  }
};

export const getFavoritesNewsLength = async () => {
  const { count, error } = await supabase
    .from("favorites")
    .select("*", { head: true, count: "exact" });

  if (error) {
    console.error(error);
    return 0;
  }

  return count ?? 0;
};

export const getSingleFavorite = async (title: string) => {
  const { data: favorite, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("title", title)
    .single();

  if (error || !favorite) {
    console.log(error);
    return null;
  }
  return favorite as FavoriteType;
};
