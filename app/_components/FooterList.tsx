import Link from "next/link";

type FooterItemType = { text: string; href: string };
interface FooterListPropsType {
  items: FooterItemType[];
}
const FooterList = ({ items }: FooterListPropsType) => {
  return (
    <ul className="flex flex-col gap-4 text-white">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
