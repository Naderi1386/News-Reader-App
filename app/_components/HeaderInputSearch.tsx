"use client";

import { useState } from "react";

const HeaderInputSearch = () => {
  const [inputSearch, setInputSearch] = useState("");
  const handleSubmit = () => {};
  return (
    <form
      className="border-b-2 border-white border-solid pb-2 flex"
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
        className="border-none outline-none text-white/85 grow"
      />
      <button className="border-none outline-none text-white cursor-pointer text-sm font-semibold">
        submit
      </button>
    </form>
  );
};

export default HeaderInputSearch;
