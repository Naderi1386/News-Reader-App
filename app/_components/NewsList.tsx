import { memo } from "react";
import {
  getBBCNews,
  getNewsByCategory,
  getSearchedNews,
  getUSNews,
  NewsType,
} from "../_lib/services";
import NewsItem from "./NewsItem";

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
    const { articles, totalResults } = await getBBCNews();
    news = articles;
    totalNews = totalResults;
  }
  if (country) {
    const { articles, totalResults } = await getUSNews();
    news = articles;
    totalNews = totalResults;
  }
  if (category) news = (await getNewsByCategory(category)).articles;
  if (q) news = (await getSearchedNews(q, String(page))).articles;
  return (
    <>
    <ul className="divide-y divide-stone-300">
      {news.map((details, index) => (
        <NewsItem details={details} key={index + 1} />
      ))}
    </ul>
    </>
  );
});

export default NewsList;
