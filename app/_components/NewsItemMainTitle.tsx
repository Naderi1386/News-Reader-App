import Link from "next/link";

interface NewsItemMainTitlePropsType {
  title: string;
}
const NewsItemMainTitle = ({ title }: NewsItemMainTitlePropsType) => {
  return <Link href={"/"} className="text-black font-bold text-lg mt-2">{title}</Link>;
};

export default NewsItemMainTitle;
