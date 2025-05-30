"use client";

import dynamic from "next/dynamic";
import AddToFavBtn from "./AddToFavBtn";
import { NewsType } from "../_lib/services";
const NewsPoster = dynamic(() => import("./NewsPoster"));
function cleanContent(text: string) {
  return String(text || "")
    .replace(/\s?\[\+\d+\s+chars\]$/, "...")
    .replace(/…\s*$/, "");
}

interface NewsItemDetailsModal {
  title: string;
  details: NewsType;
  isAdded: boolean;
}

const NewsItemDetailsModal = ({
  title,
  details,
  isAdded,
}: NewsItemDetailsModal) => {
  const { title: NewsTitle, content, urlToImage, url, description } = details;

  return (
    <>
      <span
        className="text-black text-justify cursor-pointer sm:text-left font-bold text-sm md:text-lg hover:underline block w-[75%]"
        onClick={() => {
          //@ts-expect-error type
          document.getElementById(NewsTitle)?.showModal();
        }}
      >
        {title}
      </span>
      <dialog id={NewsTitle} className="modal">
        <div className="modal-box bg-custome-dark text-white">
          <div className="flex items-center justify-center mb-5">
            <NewsPoster isRounded img={urlToImage} />
          </div>
          <div className="mb-6 flex flex-col items-center gap-3">
            <h2 className="font-bold text-lg sm:text-xl italic text-center ">
              {NewsTitle}
            </h2>
            <AddToFavBtn
              isAdded={isAdded}
              favorite={{
                content,
                description,
                img: urlToImage,
                link: url,
                title: NewsTitle,
              }}
            />
          </div>
          <p className="mb-4 text-sm sm:text-base">{cleanContent(content)}</p>
          <a
            href={url}
            target="_blank"
            className="underline text-sm sm:text-base transition-all duration-150 hover:text-custome-green font-semibold"
          >
            See More
          </a>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NewsItemDetailsModal;
