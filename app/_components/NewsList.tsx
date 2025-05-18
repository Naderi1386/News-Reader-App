import { getBBCNews, getNewsByCategory, getUSNews, NewsType } from "../_lib/services";
import NewsItem from "./NewsItem";

interface NewsListPropsType {
  category: string | undefined;
  sources: string | undefined;
  country: string | undefined;
}
const NewsList = async ({ category, country, sources }: NewsListPropsType) => {
  let news: NewsType[] = [];
  if (sources) news = (await getBBCNews()).articles;
  if (country) news = (await getUSNews()).articles;
  if (category) news = (await getNewsByCategory(category)).articles;
  return (
    <ul className="divide-y divide-stone-300">
      {news.map((details, index) => (
        <NewsItem details={details} key={index + 1} />
      ))}
    </ul>
  );
};

export default NewsList;
