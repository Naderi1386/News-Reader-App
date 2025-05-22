import NewsBigTitle from "../_components/NewsBigTitle";
import { getSearchedNews } from "../_lib/services";

interface SearchParamsType {
  q: string;
}

interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}

export async function generateMetadata(props: PagePropsType) {
  const q = (await props.searchParams).q || "search";
  return {
    title: `Search for ${q.replaceAll("-", " ")}`,
  };
}

const page = async (props: PagePropsType) => {
  const query = (await props.searchParams).q || "search";
  const { articles } = await getSearchedNews(query);

  return (
    <div className="text-black px-4 md:px-18 py-18">
      <div className="space-y-10">
        <NewsBigTitle>News for {query}</NewsBigTitle>
      </div>
    </div>
  );
};

export default page;
