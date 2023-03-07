import React, { useEffect } from "react";
import { ItemSideBar, Province } from "../../components";
import { text } from "../../utils/constant";
import List from "./List";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const HomePage = () => {
  // const [params] = useSearchParams();
  const dispatch = useDispatch();
  const { categories, prices, areas } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  // console.log(prices);
  return (
    <div className="border flex flex-col gap-3">
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
        <div className="col-span-4 w-full border space-y-4">
          <ItemSideBar
            content={categories}
            title="Danh mục cho thuê"
            isDoubleCol={false}
          />
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
