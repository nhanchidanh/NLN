import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { Address, Overview } from "../../components";
const CreatePost = () => {
  return (
    <div className="px-8">
      <h1 className="text-3xl py-4 border-b">Đăng tin mới</h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8  space-y-8 border">
          <Address />
          <Overview />
          <div className="w-full">
            <h2 className="font-bold text-2xl">Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
            <div className="w-full my-4">
              <label
                className=" flex flex-col gap-2 items-center justify-center border-2 border-gray-400 h-[200px] border-dashed rounded-md"
                htmlFor="file"
              >
                <BsFillCameraFill color="blue" size={50} />
                Thêm ảnh
              </label>
              <input hidden type="file" id="file" />
            </div>
          </div>
        </div>
        <div className="col-span-4 border">map</div>
      </div>
    </div>
  );
};

export default CreatePost;
