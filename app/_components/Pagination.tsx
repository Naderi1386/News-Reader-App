"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationPropsType {
  totalNews: number;
}

const Pagination = ({ totalNews }: PaginationPropsType) => {
  const lastPage = Math.ceil(totalNews / 10);
  const searchParams = useSearchParams();
  const page = searchParams.get("page")?.toString();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClick = (char: "+" | "-") => {
    const params = new URLSearchParams(searchParams);
    const currentPage = Number(page) || 1;
    if (char === "+") {
      params.set("page", String(currentPage + 1));
    } else if (char === "-" && currentPage > 1) {
      params.set("page", String(currentPage - 1));
    }
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex items-center justify-center mt-6 ">
      <div className="join ">
        <button
          onClick={() => handleClick("-")}
          className="join-item btn shadow-none bg-custome-green border-white"
        >
          «
        </button>
        <button className="join-item btn shadow-none bg-custome-green border-white">
          Page {page ? page : "1"}
        </button>
        <button
          disabled={lastPage === (Number(page) || 1)}
          onClick={() => handleClick("+")}
          className="join-item btn shadow-none bg-custome-green border-white "
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
