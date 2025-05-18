import { NewsType } from "../_lib/services";
import NewsItemDescription from "./NewsItemDescription";
import NewsItemMainTitle from "./NewsItemMainTitle";
import NewsItemPublishedDate from "./NewsItemPublishedDate";
import NewsItemSmallTItle from "./NewsItemSmallTItle";
import NewsPoster from "./NewsPoster";

interface NewsItemPropsType {
  details: NewsType;
}
const NewsItem = ({ details }: NewsItemPropsType) => {
  const { title, urlToImage, description, publishedAt } = details;
  return (
    <li className="flex items-center gap-10 py-5">
      <NewsPoster img={urlToImage} />
      <div className="grow">
        <NewsItemSmallTItle />
        <NewsItemMainTitle title={title} />
        <div className="flex items-center justify-between mt-3">
          <NewsItemDescription description={description} />
          <NewsItemPublishedDate date={publishedAt} />
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
