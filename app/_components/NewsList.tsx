import { NewsType } from "../_lib/services";
import NewsItem from "./NewsItem";

interface NewsListPropsType {
  news: NewsType[];
}
const NewsList = ({ news }: NewsListPropsType) => {
  return (
    <ul className="divide-y divide-stone-300">
      {news.map((details, index) => (
        <NewsItem details={details} key={index + 1} />
      ))}
    </ul>
  );
};

export default NewsList;
