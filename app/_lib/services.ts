export const getBBCNews = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "sources=bbc-news&" +
    "apiKey=6e595de11f6249a9bb6b5c3a8981e89b";
  const req = new Request(url);
  try {
    const request = await fetch(req);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("BBC News Could Not Be Loaded !");
  }
};
