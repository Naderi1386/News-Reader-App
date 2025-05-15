"use client";
import { useState } from "react";
import HeaderSearchBtn from "./HeaderSearchBtn";
import Navigation from "./Navigation";
import HeaderInputSearch from "./HeaderInputSearch";
import { AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import HeaderDrawer from "./HeaderDrawer";

const HeaderContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className={`flex gap-3 sm:gap-8 items-center justify-between `}>
      {!isSearchOpen && <Logo />}

      {!isSearchOpen ? (
        <Navigation />
      ) : (
        <AnimatePresence>
          <div className="grow">
            <HeaderInputSearch />
          </div>
        </AnimatePresence>
      )}
      <div className="flex items-center gap-2">
        <HeaderSearchBtn
          isSearchOpen={isSearchOpen}
          onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
        />
        {!isSearchOpen && <HeaderDrawer />}
      </div>
    </div>
  );
};

export default HeaderContent;
