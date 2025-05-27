"use client";
import Image from "next/image";
import { useState } from "react";

interface NewsPosterPropsType {
  img: string;
  isRounded: boolean;
  isFull?:boolean
}

const NewsPoster = ({ img, isRounded ,isFull}: NewsPosterPropsType) => {
  const proxiedSrc = `/api/image-proxy?url=${encodeURIComponent(img)}`;
  const [src, setSrc] = useState(proxiedSrc);

  if(isFull) return (
    <Image
     fill
      quality={90}
      className={`${isRounded && "rounded-md"} object-cover`}
      src={src}
      alt="NEWS-POSTER"
      onError={() => setSrc("/images/empty-news.jpg")}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlZWUiIC8+PC9zdmc+"
      loading="lazy"
    />
  );
  return (
    <Image
      width={150}
      height={100}
      quality={90}
      className={`${isRounded && "rounded-md"}`}
      src={src}
      alt="NEWS-POSTER"
      onError={() => setSrc("/images/empty-news.jpg")}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlZWUiIC8+PC9zdmc+"
      loading="lazy"
    />
  );
};

export default NewsPoster;
