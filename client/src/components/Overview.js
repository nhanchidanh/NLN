import React from "react";
import { useSelector } from "react-redux";
import { InputFormSystem, InputReadOnly, SelectForm } from "./";

const targets = [
  { id: 1, value: "Nam" },
  { id: 2, value: "Nữ" },
];

const Overview = () => {
  const { categories } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.user);
  console.log(categories);
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-2xl">Thông tin mô tả</h2>
      <SelectForm label={"Loại chuyên mục"} options={categories} />
      <InputFormSystem label={"Tiêu đề"} />
      <div className="flex flex-col gap-2 w-full">
        <label className="font-medium" htmlFor="description">
          Nội dung mô tả
        </label>
        <textarea
          id="description"
          className="outline-none border rounded-md"
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <InputReadOnly label={"Thông tin liên hệ"} value={currentUser?.name} />
      <InputReadOnly label={"Điện thoại"} value={currentUser?.phone} />
      <InputFormSystem label={"Giá cho thuê"} unit={"đồng"} />
      <InputFormSystem label={"Diện tích"} unit={"m2"} />
      <SelectForm label={"Đối tượng cho thuê"} options={targets} />
    </div>
  );
};

export default Overview;
