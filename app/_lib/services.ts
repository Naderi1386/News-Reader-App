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
export const getBBCNews = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "sources=bbc-news&" +
    `apiKey=${process.env.API_KEY}`;
  const req = new Request(url);
  try {
    const request = await fetch(req);
    const response = await request.json();
    return response as NewsType[];
  } catch (error) {
    console.error(error);
    throw new Error("BBC News Could Not Be Loaded !");
  }
};
