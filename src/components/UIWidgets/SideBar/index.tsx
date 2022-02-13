import React from "react";
import { ArrowLeft } from "react-feather";
import { H2 } from "..";
import SearchInput from "./Search";

interface Props {
  children: React.ReactChild | React.ReactChild[];
  searchOptions: {
    search: string;
    setSearch: (value: string) => void;
  };
  backOnClick?: () => void;
}

const SideBar = ({
  children,
  searchOptions: { search, setSearch },
  backOnClick,
}: Props) => {
  return (
    <div className="shadow-inner h-full bg-lsbg overflow-auto">
      <div className="w-full bg-lprimary text-lbg p-4 absolute flex items-center">
        {backOnClick && (
          <ArrowLeft className="cursor-pointer" onClick={backOnClick} />
        )}
        <H2 className="!text-lg ml-3">RCG</H2>
      </div>

      <div className="p-4 mt-16">
        <div>
          <SearchInput search={search} setSearch={setSearch} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default SideBar;
