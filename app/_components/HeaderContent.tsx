"use client";
import { useState } from "react";
import HeaderSearchBtn from "./HeaderSearchBtn";
import Navigation from "./Navigation";

const HeaderContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <Navigation />
      <HeaderSearchBtn onClick={() => setIsSearchOpen((isOpen) => !isOpen)} />
    </div>
  );
};

export default HeaderContent;
