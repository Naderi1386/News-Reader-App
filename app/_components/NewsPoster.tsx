"use client";
import Image from "next/image";
import { useState } from "react";

interface NewsPosterPropsType {
  img: string;
}
const NewsPoster = ({ img }: NewsPosterPropsType) => {
  const proxiedSrc = `/api/image-proxy?url=${encodeURIComponent(img)}`;
  const [src, setSrc] = useState(proxiedSrc);
  return (
    <Image
      width={150}
      height={100}
      quality={90}
      src={src}
      alt="NEWS-POSTER"
      onError={() => setSrc("/images/empty-news.jpg")}
    />
  );
};

export default NewsPoster;
