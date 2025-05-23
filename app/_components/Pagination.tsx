"use client";

import { useSearchParams } from "next/navigation";

const Pagination = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page")?.toString();
  return (
    <div className="flex items-center justify-center mt-6 ">
      <div className="join ">
        <button className="join-item btn shadow-none bg-custome-green border-white">
          «
        </button>
        <button className="join-item btn shadow-none bg-custome-green border-white">
          Page {page ? page : "1"}
        </button>
        <button className="join-item btn shadow-none bg-custome-green border-white">
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
