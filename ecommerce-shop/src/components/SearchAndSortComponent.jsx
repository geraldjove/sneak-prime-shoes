import React, { useState, useEffect } from "react";

const SearchAndSortComponent = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("testing");
  };

  return (
    <>
      <aside className="bg-gray-200 min-h-[100%] rounded-xl p-5 flex justify-center ">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-sm w-full"
          />
          <label>Categories</label>

          <div className="flex justify-center space-x-5">
            <input
              type="checkbox"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label>Placeholder 1</label>
          </div>
          <button type="submit" className="bg-primary rounded-lg text-white">
            Submit
          </button>
        </form>
      </aside>
    </>
  );
};

export default SearchAndSortComponent;
