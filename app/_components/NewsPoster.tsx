import Image from "next/image";

interface NewsPosterPropsType{
    img:string
}
const NewsPoster = ({img}: NewsPosterPropsType) => {
  return <div className="relative w-[175px] h-[95px]">
    <Image fill quality={90} src={img} className="object-cover" alt="NEWS-POSTER" />
  </div>;
};

export default NewsPoster