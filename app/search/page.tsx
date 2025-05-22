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
  return <div>page</div>;
};

export default page;
