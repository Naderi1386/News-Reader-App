import { ReactNode } from "react";

interface NewsBigTitlePropsType {
  children: ReactNode;
}
const NewsBigTitle = ({ children }: NewsBigTitlePropsType) => {
  return <h1 className="text-4xl sm:text-6xl text-custome-green font-bold capitalize">{children}</h1>;
};

export default NewsBigTitle;
