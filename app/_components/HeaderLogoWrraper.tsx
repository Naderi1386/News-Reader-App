"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hidden md:block"
    >
      <Logo type="header" />
    </motion.div>
  );
};

export default HeaderLogoWrraper;
