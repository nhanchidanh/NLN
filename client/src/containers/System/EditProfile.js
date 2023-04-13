import React, { useState } from "react";
import anonAvatar from "../../assets/anon-avatar.png";
import { Button, InputFormSystem } from "../../components";
const EditProfile = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  return (
    <div className="">
      <h1 className="text-3xl py-4 border-b">Thông tin cá nhân</h1>
      <div className="py-4 space-y-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <label className="font-medium" htmlFor="avatar">
            Ảnh đại diện
          </label>
          <img
            src={anonAvatar}
            alt="avatar"
            className="w-32 h-w-32 object-cover rounded-full"
          />
        </div>
        <div className="grid grid-cols-12 space-x-6">
          <div className="col-span-6 ">
            <InputFormSystem
              label={"Tên hiển thị"}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
            <InputFormSystem
              label={"Số điện thoại"}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
          </div>
          <div className="col-span-6 ">
            <InputFormSystem
              label={"Email"}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
            <InputFormSystem
              label={"Mật khẩu"}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
          </div>
        </div>
      </div>
      <Button
        fullWidth
        text={"Cập nhật"}
        bgColor={"bg-secondary1"}
        textColor={"text-white"}
      ></Button>
    </div>
  );
};

export default EditProfile;
