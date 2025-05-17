import { NewsType } from "../_lib/services";
import NewsPoster from "./NewsPoster";

interface NewsItemPropsType {
  details: NewsType;
}
const NewsItem = ({ details }: NewsItemPropsType) => {
  const { title, urlToImage } = details;
  return (
    <li className="flex items-center gap-10 py-5">
      <NewsPoster img={urlToImage} />
      <div>
        
      </div>
    </li>
  );
};

export default NewsItem;
