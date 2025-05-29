import { ReactNode } from "react";

interface EmptyContentPropsType {
  children: ReactNode;
  href: string;
  linkText: string;
}
const EmptyContent = ({ children, href, linkText }: EmptyContentPropsType) => {
  return <div>EmptyContent</div>;
};

export default EmptyContent;
