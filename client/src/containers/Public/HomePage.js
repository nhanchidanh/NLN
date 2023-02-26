import React from "react";
import { Province } from "../../components";
import { text } from "../../utils/constant";

const HomePage = () => {
  return (
    <div className="border flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province></Province>
    </div>
  );
};

export default HomePage;
