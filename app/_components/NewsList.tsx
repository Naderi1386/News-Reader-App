import NewsItem from "./NewsItem";

interface NewsListPropsType {
  category: string | undefined;
  sources: string | undefined;
  country: string | undefined;
}
const NewsList = ({ category, country, sources }: NewsListPropsType) => {
  return (
    <ul className="divide-y divide-stone-300">
      {news.map((details, index) => (
        <NewsItem details={details} key={index + 1} />
      ))}
    </ul>
  );
};

export default NewsList;
