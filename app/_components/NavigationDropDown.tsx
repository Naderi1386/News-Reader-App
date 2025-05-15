
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
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationDropDown