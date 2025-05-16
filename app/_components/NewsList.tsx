import { NewsType } from "../_lib/services";

interface NewsListPropsType {
  news: NewsType[];
}
const NewsList = ({ news }: NewsListPropsType) => {
  return <ul>NewsList</ul>;
};

export default NewsList;
