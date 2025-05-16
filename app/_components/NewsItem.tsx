import { NewsType } from "../_lib/services";

interface NewsItemPropsType {
  details: NewsType;
}
const NewsItem = ({ details }: NewsItemPropsType) => {
  const { title } = details;
  return <li>{title}</li>;
};

export default NewsItem;
