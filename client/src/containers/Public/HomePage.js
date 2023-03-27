import React from "react";
import { useSelector } from "react-redux";
import { ItemSideBar, Province, RelatedPost } from "../../components";
import { text } from "../../utils/constant";
import List from "./List";
import Pagination from "./Pagination";

const HomePage = () => {
  // const [params] = useSearchParams();
  const { categories, priceRanges, areaRanges } = useSelector(
    (state) => state.app
  );

  // console.log({ categories, priceRanges, areaRanges });
  return (
    <div className=" flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province></Province>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 w-full">
          <List />
          <Pagination />
        </div>
        <div className="col-span-4 w-full space-y-4">
          <ItemSideBar
            type="category"
            content={categories}
            title="Danh mục cho thuê"
            isDoubleCol={false}
          />
          <ItemSideBar
            type="priceRange"
            content={priceRanges}
            title="Xem theo giá"
            isDoubleCol={true}
          />
          <ItemSideBar
            type="areaRange"
            content={areaRanges}
            title="Xem theo diện tích"
            isDoubleCol={true}
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
