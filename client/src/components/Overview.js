import React from "react";
import { useSelector } from "react-redux";
import { InputFormSystem, InputReadOnly, SelectForm } from "./";

const targets = [
  { id: "MALE", title: "Nam" },
  { id: "FEMALE", title: "Nữ" },
  { id: "ALL", title: "Tất cả" },
];

const Overview = ({ payload, setPayload }) => {
  const { categories } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.user);
  // console.log(categories);
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-2xl">Thông tin mô tả</h2>
      <SelectForm
        label={"Loại chuyên mục"}
        value={payload?.categoryId}
        setValue={setPayload}
        name="categoryId"
        options={categories}
      />
      <InputFormSystem
        value={payload?.title}
        setValue={setPayload}
        label={"Tiêu đề"}
        name="title"
      />
      <div className="flex flex-col gap-2 w-full">
        <label className="font-medium" htmlFor="description">
          Nội dung mô tả
        </label>
        <textarea
          id="description"
          className="outline-none border rounded-md"
          cols={30}
          rows={10}
          value={payload?.description}
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, description: e.target.value }))
          }
        ></textarea>
      </div>
      <InputReadOnly
        label={"Thông tin liên hệ"}
        value={currentUser?.fullName}
      />
      <InputReadOnly label={"Điện thoại"} value={currentUser?.phone} />
      <InputFormSystem
        small={"Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000"}
        label={"Giá cho thuê"}
        unit={"đồng"}
        name="price"
        value={payload?.price}
        setValue={setPayload}
      />
      <InputFormSystem
        label={"Diện tích"}
        unit={"m2"}
        name="area"
        value={payload?.area}
        setValue={setPayload}
      />
      <SelectForm
        label={"Đối tượng cho thuê"}
        options={targets}
        name="target"
        value={payload?.target}
        setValue={setPayload}
      />
    </div>
  );
};

export default Overview;
