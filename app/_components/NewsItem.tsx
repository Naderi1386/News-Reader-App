import { NewsType } from "../_lib/services";
import NewsItemDescription from "./NewsItemDescription";
import NewsItemMainTitle from "./NewsItemMainTitle";
import NewsItemSmallTItle from "./NewsItemSmallTItle";
import NewsPoster from "./NewsPoster";

interface NewsItemPropsType {
  details: NewsType;
}
const NewsItem = ({ details }: NewsItemPropsType) => {
  const { title, urlToImage, description } = details;
  return (
    <li className="flex items-center gap-10 py-5">
      <NewsPoster img={urlToImage} />
      <div className="grow">
        <NewsItemSmallTItle />
        <NewsItemMainTitle title={title} />
        <div className="flex items-center justify-between mt-1">
          <NewsItemDescription description={description} />
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
