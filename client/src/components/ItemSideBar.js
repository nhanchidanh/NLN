import React, { memo } from "react";
import icons from "../utils/icons";

const { MdNavigateNext } = icons;

const ItemSideBar = ({ title, content, colNumber }) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-2 grid grid-cols-12 ">
        {content?.length > 0 &&
          content.map((item) => {
            return (
              <div
                key={item.code}
                className={` flex col-span-${
                  12 / colNumber
                } gap-1 items-center cursor-pointer hover:text-orange-600 border-b border-gray-200 pb-1 border-dashed `}
              >
                <MdNavigateNext color="#999" className="mt-[2px]" />
                <p>{item.value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default memo(ItemSideBar);

//memo: giúp hạn chế re render. chỉ render khi prop truyền xuống bị thay đổi
