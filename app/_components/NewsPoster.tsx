import Image from "next/image";

interface NewsPosterPropsType {
  img: string;
}
const NewsPoster = ({ img }: NewsPosterPropsType) => {
  const proxiedSrc = `/api/image-proxy?url=${encodeURIComponent(img)}`;
  return (
    <Image
      width={150}
      height={100}
      quality={90}
      src={proxiedSrc}
      alt="NEWS-POSTER"
    />
  );
};

export default NewsPoster;
