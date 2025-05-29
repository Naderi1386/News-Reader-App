import Link from "next/link";
import { ReactNode } from "react";

interface EmptyContentPropsType {
  children: ReactNode;
  href: string;
  linkText: string;
}
const EmptyContent = ({ children, href, linkText }: EmptyContentPropsType) => {
  return (
    <div className="bg-white text-custome-green text-center space-y-5">
      <h2 className="text-3xl font-bold">{children}</h2>
      <Link href={href} className="text-blue-700 underline text-sm">
        {linkText}
      </Link>
    </div>
  );
};

export default EmptyContent;
