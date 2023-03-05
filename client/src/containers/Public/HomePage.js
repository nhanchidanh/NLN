import React, { useEffect } from "react";
import { ItemSideBar, Province } from "../../components";
import { text } from "../../utils/constant";
import List from "./List";
import Pagination from "./Pagination";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const HomePage = () => {
  const [params] = useSearchParams();
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
          <List page={params.get("page")} />
          <Pagination page={params.get("page")} />
        </div>
        <div className="col-span-4 w-full border space-y-4">
          <ItemSideBar
            content={categories}
            title="Danh mục cho thuê"
            colNumber={1}
          />
          <ItemSideBar content={prices} title="Xem theo giá" colNumber={2} />
          <ItemSideBar
            content={areas}
            title="Xem theo diện tích"
            colNumber={2}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
