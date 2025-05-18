import Link from "next/link";

interface NewsItemMainTitlePropsType {
  title: string;
}
const NewsItemMainTitle = ({ title }: NewsItemMainTitlePropsType) => {
  return <Link href={"/"} className="text-black font-bold text-sm md:text-lg hover:underline block w-[75%]">{title}</Link>;
};

export default NewsItemMainTitle;
