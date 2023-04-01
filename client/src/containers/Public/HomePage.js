import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ItemSideBar, Province, RelatedPost } from "../../components";
import { text } from "../../utils/constant";
import List from "./List";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isCancel, setIsCancel] = useState(false);

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
          {/* <Pagination /> */}
        </div>
        <div className="col-span-4 w-full space-y-4">
          <ItemSideBar
            onResetCancel={() => setIsCancel(false)}
            isCancel={isCancel}
            type="category"
            content={categories}
            title="Danh mục cho thuê"
            isDoubleCol={false}
          />
          <ItemSideBar
            onResetCancel={() => setIsCancel(false)}
            isCancel={isCancel}
            type="priceRange"
            content={priceRanges}
            title="Xem theo giá"
            isDoubleCol={true}
          />
          <ItemSideBar
            onResetCancel={() => setIsCancel(false)}
            isCancel={isCancel}
            type="areaRange"
            content={areaRanges}
            title="Xem theo diện tích"
            isDoubleCol={true}
          />
          <div className="w-full p-3 bg-red-600 text-white text-center rounded-md hover:bg-red-500 transition-all ease-in-out duration-300">
            <Link className=" block" onClick={() => setIsCancel(true)} to={"/"}>
              Hủy
            </Link>
          </div>
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
