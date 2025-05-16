import { NewsType } from "../_lib/services";

interface NewsItemPropsType {
  details: NewsType;
}
const NewsItem = ({ details }: NewsItemPropsType) => {
  return <div>NewsItem</div>;
};

export default NewsItem;
