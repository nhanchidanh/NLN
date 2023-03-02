import React from "react";
import { Province } from "../../components";
import { text } from "../../utils/constant";
import List from "./List";
import Pagination from "./Pagination";
import { useParams, useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [params] = useSearchParams();
  // console.log(params.get("page"));
  return (
    <div className="border flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province></Province>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 w-full">
          <List page={params.get("page")} />
          <Pagination page={params.get("page")} />
        </div>
        <div className="col-span-4 w-full border">sidebar</div>
      </div>
    </div>
  );
};

export default HomePage;
