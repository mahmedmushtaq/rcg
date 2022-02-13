import React, { useState } from "react";
import { Search } from "react-feather";

interface propType {
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput = ({ search, setSearch }: propType) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="py-2 px-4 rounded-md bg-lbg flex items-center">
      <Search size={20} />
      <input
        type="text"
        value={search}
        onChange={onChange}
        className="focus:outline-none font-montserratRegular py-2 px-4 text-xs w-full"
        placeholder="Search Widget"
      />
    </div>
  );
};

export default SearchInput;
