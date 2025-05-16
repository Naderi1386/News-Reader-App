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
  const [category, country, sources] = await Promise.all([
    (await props.searchParams).category,
    (await props.searchParams).country,
    (await props.searchParams).sources,
  ]);
  const title = category ? category : country ? country : sources;
  return {
    title: `${title ? title.replaceAll("-", " ").toUpperCase() : "BBC"}`,
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
  

  return <div></div>;
};

export default page;
