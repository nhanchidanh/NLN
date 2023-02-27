import React from "react";
import { Button, Item } from "../../components";

const List = () => {
  return (
    <div className=" p-5 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 12/08/2022</span>
      </div>
      <div className="flex items-center gap-1 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor={"bg-gray-200"} text="Mặc định" />
        <Button bgColor={"bg-gray-200"} text="Mới nhất" />
      </div>
      <div>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default List;
