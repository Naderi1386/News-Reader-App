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
    <div className="text-white hidden md:block">
      <nav className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {navigationItems.map((navItem) => (
            <li key={navItem.href}>
              <Link
                href={navItem.href}
                className="block cursor-pointer font-semibold transition-all duration-500 delay-100 border-b-[1.4px] border-solid border-transparent hover:border-b-custome-green hover:text-custome-green "
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
