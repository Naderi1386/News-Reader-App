"use client";
import { ReactNode, useState } from "react";
import HeaderSearchBtn from "./HeaderSearchBtn";
import Navigation from "./Navigation";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import SpinnerMini from "./SpinnerMini";
const HeaderLogoWrraper = dynamic(() => import("./HeaderLogoWrraper"), {
  ssr: false,
});
const HeaderInputSearch = dynamic(() => import("./HeaderInputSearch"), {
  ssr: false,
});
const Logo = dynamic(() => import("./Logo"), { ssr: false });
const HeaderDrawer = dynamic(() => import("./HeaderDrawer"), {
  ssr: false,
  loading: () => <SpinnerMini />,
});

interface HeaderContentPropsType {
  children: ReactNode;
}

const HeaderContent = ({ children }: HeaderContentPropsType) => {
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
            <HeaderInputSearch onClose={() => setIsSearchOpen(false)} />
          </div>
        </AnimatePresence>
      )}
      <div className="flex items-center gap-4">
        {!isSearchOpen && <div className="hidden sm:block">{children}</div>}

        <HeaderSearchBtn
          isSearchOpen={isSearchOpen}
          onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
        />
        {!isSearchOpen && <HeaderDrawer>{children}</HeaderDrawer>}
      </div>
    </div>
  );
};

export default HeaderContent;
