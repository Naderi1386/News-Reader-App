import Link from "next/link";

interface NewsItemMainTitlePropsType {
  title: string;
}
const NewsItemMainTitle = ({ title }: NewsItemMainTitlePropsType) => {
  return <Link href={"/"} className="text-black font-bold text-lg hover:underline block">{title}</Link>;
};

export default NewsItemMainTitle;
