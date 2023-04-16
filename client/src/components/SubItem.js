import React from "react";
import moment from "moment";
import "moment/locale/vi"; //Chuyển ngôn ngữ thời gian: 2 day ago -> 2 ngày trước
import convertToMillion from "../utils/Common/convertToMillion";

const SubItem = ({ title, price, image, createdAt }) => {
  return (
    <div className="w-full flex items-center gap-3 border-b border-gray-300 py-2">
      <img
        src={image?.url}
        alt="anh"
        className="max-w-[90px] h-[80px] w-full object-cover rounded-md"
      />
      <div className="w-full">
        <h4 className="text-blue-800">{`${title?.slice(0, 50)}...`}</h4>
        <div className="flex justify-between items-center w-full  mt-2">
          <span className="text-green-600 font-bold ">
            {convertToMillion(price)}
          </span>
          <span className="text-gray-500 text-sm">
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubItem;
