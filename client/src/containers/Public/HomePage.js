import React from "react";
import { text } from "../../utils/constant";
import { Search } from "./index";

const HomePage = () => {
  return (
    <div className="border flex flex-col gap-3">
      <Search />
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default HomePage;
