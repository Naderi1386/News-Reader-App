"use client";
import { useState } from "react";
import HeaderSearchBtn from "./HeaderSearchBtn";
import Navigation from "./Navigation";
import HeaderInputSearch from "./HeaderInputSearch";
import { AnimatePresence } from "framer-motion";
const Logo = dynamic(() => import("./Logo"));
const HeaderDrawer = dynamic(() => import("./HeaderDrawer"));
import HeaderLogoWrraper from "./HeaderLogoWrraper";
import dynamic from "next/dynamic";

const HeaderContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className={`flex gap-3 sm:gap-8 items-center justify-between `}>
      {!isSearchOpen && (
        <div className="block md:hidden">
          <Logo type="header" />
        </div>
      )}

      {!isSearchOpen ? (
        <div className="flex items-center gap-4">
          <HeaderLogoWrraper />
          <Navigation />
        </div>
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
