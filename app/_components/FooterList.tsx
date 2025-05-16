import Link from "next/link";

type FooterItemType = { text: string; href: string };
interface FooterListPropsType {
  items: FooterItemType[];
}
const FooterList = ({ items }: FooterListPropsType) => {
  return (
    <ul className="flex flex-col gap-2  font-semibold">
      {items.map((item) => (
        <li
          key={item.href}
          className="text-white transition-all duration-200 hover:text-custome-green"
        >
          <Link href={item.href}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
