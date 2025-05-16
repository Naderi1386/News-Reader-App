interface SearchParamsType {
  sources?: string;
  country?: string;
  category?: string;
}

interface PagePropsType {
  searchParams: Promise<SearchParamsType>;
}

const page = ({ searchParams }: PagePropsType) => {
    
  return <div>page</div>;
};

export default page;
