interface SearchParamsType {
  q: string;
}

interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}

const page = async (props: PagePropsType) => {
  const query = (await props.searchParams).q || "search";
  return <div>page</div>;
};

export default page;
