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
interface ResponseType {
  status: string;
  totalResults: number;
  articles: NewsType[];
}
export const getBBCNews = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "sources=bbc-news&" +
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

export const getUSNews = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
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

export const getNewsByCategory = async (category: string) => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    `category=${category}&` +
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
