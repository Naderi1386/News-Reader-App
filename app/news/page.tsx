import NewsBigTitle from "../_components/NewsBigTitle";
import { capitalizeFirstLetter } from "../_lib/helper";
import {
  getBBCNews,
  getNewsByCategory,
  getUSNews,
  NewsType,
} from "../_lib/services";

interface SearchParamsType {
  sources?: string;
  country?: string;
  category?: string;
}

interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}
export const generateMetadata = async (props: PagePropsType) => {
  const [category, country] = await Promise.all([
    (await props.searchParams).category,
    (await props.searchParams).country,
  ]);
  const title = category ? category : country ? "US" : "BBC News";
  const capitalizedTitle = capitalizeFirstLetter(title);
  return {
    title: `${
      capitalizedTitle ? capitalizedTitle.replaceAll("-", " ") : "BBC News"
    }`,
  };
};

const page = async (props: PagePropsType) => {
  const [category, country, sources] = await Promise.all([
    (await props.searchParams).category,
    (await props.searchParams).country,
    (await props.searchParams).sources,
  ]);
  let data: NewsType[] = [];
  if (sources) data = (await getBBCNews()).articles;
  if (country) data = (await getUSNews()).articles;
  if (category) data = (await getNewsByCategory(category)).articles;

  return (
    <div className="text-black px-4 md:px-18 py-18">
      <div className="space-y-10">
        <NewsBigTitle>
          {category ? category : country ? "United states" : "BBC"} News
        </NewsBigTitle>

      </div>
    </div>
  );
};

export default page;
