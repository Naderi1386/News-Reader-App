import Image from "next/image";

interface NewsPosterPropsType {
  img: string;
}
const NewsPoster = ({ img }: NewsPosterPropsType) => {
  const proxiedSrc = `/api/image-proxy?url=${encodeURIComponent(img)}`;
  return (
    <div className="relative w-[175px] h-[95px] border border-solid border-black/10">
      <Image
        fill
        quality={90}
        src={proxiedSrc}
        className="object-cover"
        alt="NEWS-POSTER"
      />
    </div>
  );
};

export default NewsPoster;
