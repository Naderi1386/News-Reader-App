import dynamic from "next/dynamic";
import { getSingleFavorite, NewsType } from "../_lib/services";
import NewsItemDescription from "./NewsItemDescription";
import NewsItemPublishedDate from "./NewsItemPublishedDate";
import NewsItemSmallTItle from "./NewsItemSmallTItle";
const NewsItemDetailsModal = dynamic(() => import("./NewsItemDetailsModal"));
const NewsPoster = dynamic(() => import("./NewsPoster"));

interface NewsItemPropsType {
  details: NewsType;
}
const NewsItem = async ({ details }: NewsItemPropsType) => {
  const { title, urlToImage, description, publishedAt } = details;
  const singleFav = await getSingleFavorite(title);

  const isAdded = singleFav ? true : false;
  return (
    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 py-5">
      <NewsPoster isRounded={false} img={urlToImage} />
      <div className="grow">
        <NewsItemSmallTItle />
        <NewsItemDetailsModal
          isAdded={isAdded}
          details={details}
          title={title}
        />
        <div className="flex items-center justify-between mt-3">
          <NewsItemDescription description={description} />
          <NewsItemPublishedDate date={publishedAt} />
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
