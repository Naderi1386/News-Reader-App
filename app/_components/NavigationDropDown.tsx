import Link from "next/link";

const DropdownItems = [
  { text: "business", href: "/news?category=business" },
  { text: "entertainment", href: "/news?category=entertainment" },
  { text: "general", href: "/news?category=general" },
  { text: "health", href: "/news?category=health" },
  { text: "science", href: "/news?category=science" },
  { text: "sports", href: "/news?category=sports" },
  { text: "technology", href: "/news?category=technology" },
];

const NavigationDropDown = () => {
  return (
    <div className="dropdown dropdown-hover">
      <span
        tabIndex={0}
        role="button"
        className="block cursor-pointer font-semibold transition-all duration-500  hover:text-custome-green "
      >
        Category
      </span>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {DropdownItems.map((dropItem) => (
          <li key={dropItem.href}>
            <Link
              href={dropItem.href}
              className="text-black font-semibold block transition-all duration-500 hover:text-custome-green"
            >
              {dropItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationDropDown;
