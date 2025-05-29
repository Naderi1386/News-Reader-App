import { memo } from "react";
import {
  getBBCNews,
  getNewsByCategory,
  getSearchedNews,
  getUSNews,
  NewsType,
} from "../_lib/services";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

interface NewsListPropsType {
  category?: string | undefined;
  sources?: string | undefined;
  country?: string | undefined;
  q?: string | undefined;
  page?: string;
}
const NewsList = memo(async function NewsList({
  category,
  country,
  sources,
  q,
  page,
}: NewsListPropsType) {
  let news: NewsType[] = [];
  let totalNews: number = 0;
  if (sources) {
    const { articles, totalResults } = await getBBCNews(String(page));
    news = articles;
    totalNews = totalResults;
  }
  if (country) {
    const { articles, totalResults } = await getUSNews(String(page));
    news = articles;
    totalNews = totalResults;
  }
  if (category) {
    const { articles, totalResults } = await getNewsByCategory(
      category,
      String(page)
    );
    news = articles;
    totalNews = totalResults;
  }
  if (q) {
    const { articles, totalResults } = await getSearchedNews(q, String(page));
    news = articles;
    totalNews = totalResults;
  } else {
    const { articles, totalResults } = await getBBCNews(String(page));
    news = articles;
    totalNews = totalResults;
  }
  return (
    <>
      <ul className="divide-y divide-stone-300">
        {news.map((details, index) => (
          <NewsItem details={details} key={index + 1} />
        ))}
      </ul>
      <Pagination totalNews={totalNews} />
    </>
  );
});

export default NewsList;
