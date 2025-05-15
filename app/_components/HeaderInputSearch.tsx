"use client";

import { useState } from "react";

const HeaderInputSearch = () => {
  const [inputSearch, setInputSearch] = useState("");
  const handleSubmit = () => {};
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="border-none outline-none"
        />
      </form>
    </div>
  );
};

export default HeaderInputSearch;
