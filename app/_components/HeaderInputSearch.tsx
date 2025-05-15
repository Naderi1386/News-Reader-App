"use client";
import { motion } from "framer-motion";

import { useState } from "react";

const HeaderInputSearch = () => {
  const [inputSearch, setInputSearch] = useState("");
  const handleSubmit = () => {};
  return (
    <motion.form
      transition={{
        duration: 0.1,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className=" w-full sm:max-w-[800px] mx-auto border-b-2 border-white border-solid pb-1 sm:pb-2 flex"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        required
        type="text"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder="Searching..."
        className="border-none outline-none text-sm sm:text-base text-white/85 grow"
      />
      <button className="border-none outline-none text-white cursor-pointer text-xs sm:text-sm font-semibold">
        submit
      </button>
    </motion.form>
  );
};

export default HeaderInputSearch;
