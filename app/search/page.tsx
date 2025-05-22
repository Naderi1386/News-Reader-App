import NewsBigTitle from "../_components/NewsBigTitle";

import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import NewsList from "../_components/NewsList";

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
  const query = (await props.searchParams).q || "news";

  return (
    <div className="text-black px-4 md:px-18 py-18">
      <div className="space-y-10">
        <NewsBigTitle>News for {query}</NewsBigTitle>
        <Suspense fallback={<Spinner />}>
          <NewsList q={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
