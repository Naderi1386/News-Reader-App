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
}
const NewsList = memo(async function NewsList({
  category,
  country,
  sources,
  q,
}: NewsListPropsType) {
  let news: NewsType[] = [];
  if (sources) news = (await getBBCNews()).articles;
  if (country) news = (await getUSNews()).articles;
  if (category) news = (await getNewsByCategory(category)).articles;
  if (q) news = (await getSearchedNews(q)).articles;
  return (
    <ul className="divide-y divide-stone-300">
      {news.map((details, index) => (
        <NewsItem details={details} key={index + 1} />
      ))}
    </ul>
  );
});

export default NewsList;
