"use client";

import { useSearchParams } from "next/navigation";

const NewsItemSmallTItle = () => {
  const searchParams = useSearchParams();
  const title =
    searchParams.get("source") ||
    searchParams.get("category") ||
    searchParams.get("country") ||
    "";
  return (
    <span className="text-custome-green text-sm font-light transition-all duration-150 pt-2 hover:border hover:border-stone-300 hover:border-solid">
      {title}
    </span>
  );
};

export default NewsItemSmallTItle;
