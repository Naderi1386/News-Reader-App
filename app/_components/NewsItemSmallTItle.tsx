"use client";

import { useSearchParams } from "next/navigation";

const NewsItemSmallTItle = () => {
  const searchParams = useSearchParams();
  const title =
    searchParams.get("sources") ||
    searchParams.get("category") ||
    searchParams.get("country") ||
    "";
  return (
    <span className="text-custome-green text-sm font-light transition-all duration-150 pt-2 border-t hover:border-stone-300 border-transparent border-solid">
      {title}
    </span>
  );
};

export default NewsItemSmallTItle;
