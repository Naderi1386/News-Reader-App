"use client";

import dynamic from "next/dynamic";
const NewsPoster = dynamic(() => import("./NewsPoster"));
function cleanContent(text: string) {
  return String(text || "")
    .replace(/\s?\[\+\d+\s+chars\]$/, "...")
    .replace(/…\s*$/, "");
}
interface NewsDetailsType {
  urlToImage: string;
  NewsTitle: string;
  content: string;
  url: string;
}
interface NewsItemDetailsModal {
  title: string;
  details: NewsDetailsType;
}

const NewsItemDetailsModal = ({ title, details }: NewsItemDetailsModal) => {
  const { NewsTitle, content, urlToImage, url } = details;

  return (
    <>
      <span
        className="text-black text-justify cursor-pointer sm:text-left font-bold text-sm md:text-lg hover:underline block w-[75%]"
        onClick={() => {
          //@ts-expect-error type
          document.getElementById("my_modal_2")?.showModal();
        }}
      >
        {title}
      </span>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-custome-dark text-white">
          <div className="flex items-center justify-center mb-5">
            <NewsPoster isRounded img={urlToImage} />
          </div>
          <h2 className="font-bold text-xl italic text-center mb-6">
            {NewsTitle}
          </h2>
          <p className="mb-4">{cleanContent(content)}</p>
          <a href={url} target="_blank" className="underline">See More</a>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NewsItemDetailsModal;
