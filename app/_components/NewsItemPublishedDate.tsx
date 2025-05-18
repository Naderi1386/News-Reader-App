"use client";
import { useEffect, useState } from "react";

interface NewsItemPublishedDatePropsType {
  date: string;
}

const NewsItemPublishedDate = ({ date }: NewsItemPublishedDatePropsType) => {
  const [publishedDate, setPublishedDate] = useState<string>("...");

  useEffect(() => {
    if (!date) return;

    const worker = new Worker(
      new URL("../_lib/timeAgoWorker.ts", import.meta.url)
    );
    worker.postMessage(date);

    worker.onmessage = (event) => {
      setPublishedDate(event.data);
    };

    return () => {
      worker.terminate();
    };
  }, [date]);

  return (
    <span className="text-stone-500 text-xs capitalize block">
      {publishedDate}
    </span>
  );
};

export default NewsItemPublishedDate;
