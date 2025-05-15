import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

const items = [
  { text: "BBC News", href: "/news?sources=bbc-news" },
  {
    text: "United States",
    href: "/news?country=us",
  },
  { text: "business", href: "/news?category=business" },
  { text: "entertainment", href: "/news?category=entertainment" },
  { text: "general", href: "/news?category=general" },
  { text: "health", href: "/news?category=health" },
  { text: "science", href: "/news?category=science" },
  { text: "sports", href: "/news?category=sports" },
  { text: "technology", href: "/news?category=technology" },
];

const HeaderDrawer = () => {
  return (
    <div className="drawer  md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn btn-sm bg-custome-green drawer-button shadow-none"
        >
          <IoMenuOutline size={20} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-custome-dark text-base-content min-h-full w-80 p-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderDrawer;
