"use client";
import { useState } from "react";
import HeaderSearchBtn from "./HeaderSearchBtn";
import Navigation from "./Navigation";
import HeaderInputSearch from "./HeaderInputSearch";

const HeaderContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className={`flex items-center ${!isSearchOpen && "justify-between"} `}>
      {!isSearchOpen ? (
        <Navigation />
      ) : (
        <div className="grow">
          <HeaderInputSearch />
        </div>
      )}

      <HeaderSearchBtn
        isSearchOpen={isSearchOpen}
        onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
      />
    </div>
  );
};

export default HeaderContent;
