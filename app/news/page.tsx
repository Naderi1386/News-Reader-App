import { Suspense } from "react";
import NewsBigTitle from "../_components/NewsBigTitle";
import NewsList from "../_components/NewsList";
import { capitalizeFirstLetter } from "../_lib/helper";
import Spinner from "../_components/Spinner";

interface SearchParamsType {
  sources?: string;
  country?: string;
  category?: string;
  page?: string;
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
  const [category, country, sources, page] = await Promise.all([
    (await props.searchParams).category,
    (await props.searchParams).country,
    (await props.searchParams).sources,
    (await props.searchParams).page,
  ]);

  return (
    <div className="text-black px-4 md:px-18 py-18">
      <div className="space-y-10">
        <NewsBigTitle>
          {category ? category : country ? "United states" : "BBC"} News
        </NewsBigTitle>
        <Suspense
          key={`${category}&${country}&${sources}&${page}`}
          fallback={<Spinner />}
        >
          <NewsList
            page={page || "1"}
            category={category}
            country={country}
            sources={sources}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
