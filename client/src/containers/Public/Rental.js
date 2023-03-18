import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ItemSideBar, Province, RelatedPost } from "../../components";
import { convertToSlug } from "../../utils/Common/convertToSlug";
import List from "./List";
import Pagination from "./Pagination";

const Rental = () => {
  const { prices, areas, categories } = useSelector((state) => state.app);
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryCurrent, setCategoryCurrent] = useState({});
  const location = useLocation();

  useEffect(() => {
    //find match category
    const category = categories?.find(
      (item) => `/${convertToSlug(item.value)}` === location.pathname
    );

    if (category) {
      setCategoryCode(category.code);
      setCategoryCurrent(category);
    }
  }, [location, categories]);

  return (
    <div className=" flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{categoryCurrent?.header}</h1>
        <p className="text-base text-gray-700">{categoryCurrent?.subheader}</p>
      </div>
      <Province></Province>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 w-full">
          <List categoryCode={categoryCode} />
          <Pagination />
        </div>
        <div className="col-span-4 w-full space-y-4">
          <ItemSideBar
            type="priceCode"
            content={prices}
            title="Xem theo giá"
            isDoubleCol={true}
          />
          <ItemSideBar
            type="areaCode"
            content={areas}
            title="Xem theo diện tích"
            isDoubleCol={true}
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default Rental;
