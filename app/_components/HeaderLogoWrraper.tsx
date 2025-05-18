"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const HeaderLogoWrraper = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!show) return null;
  return (
    <div className="hidden md:block">
      <Logo type="header" />
    </div>
  );
};

export default HeaderLogoWrraper;
