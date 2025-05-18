import { timeAgo } from "../_lib/helper";

interface NewsItemPublishedDatePropsType {
  date: string;
}
const NewsItemPublishedDate = ({ date }: NewsItemPublishedDatePropsType) => {
  const publishedDate = timeAgo(date);
  return (
    <span className="text-stone-500 text-xs capitalize block">
      {publishedDate}
    </span>
  );
};

export default NewsItemPublishedDate;
