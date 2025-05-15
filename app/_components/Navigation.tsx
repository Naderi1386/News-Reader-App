import Link from "next/link";
import NavigationDropDown from "./NavigationDropDown";

const navigationItems = [
  { text: "BBC News", href: "/news?sources=bbc-news" },
  {
    text: "United States",
    href: "/news?country=us",
  },
];

const Navigation = () => {
  return (
    <div className="text-white">
      <nav className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {navigationItems.map((navItem) => (
            <li key={navItem.href}>
              <Link
                href={navItem.href}
                className="block cursor-pointer font-semibold transition-all duration-500 hover:underline-offset-8 hover:text-custome-green hover:underline"
              >
                {navItem.text}
              </Link>
            </li>
          ))}
        </ul>
      <NavigationDropDown />
      </nav>
    </div>
  );
};

export default Navigation;
