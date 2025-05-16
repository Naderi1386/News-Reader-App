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

const page = ({ searchParams }: PagePropsType) => {
  return <div>page</div>;
};

export default page;
