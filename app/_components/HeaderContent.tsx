"use client";
import { useState } from "react";
import HeaderSearchBtn from "./HeaderSearchBtn";
import Navigation from "./Navigation";
import HeaderInputSearch from "./HeaderInputSearch";
import { AnimatePresence } from "framer-motion";

const HeaderContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className={`flex items-center ${!isSearchOpen && "justify-between"} `}>
        {!isSearchOpen ? (
          <Navigation />
        ) : (
          <AnimatePresence>

          <div className="grow">
            <HeaderInputSearch />
          </div>
          </AnimatePresence>
        )}

      <HeaderSearchBtn
        isSearchOpen={isSearchOpen}
        onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
      />
    </div>
  );
};

export default HeaderContent;
