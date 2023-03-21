import React from "react";
import { Address, Overview } from "../../components";

const CreatePost = () => {
  return (
    <div className="px-8 ">
      <h1 className="text-3xl py-4 border-b">Đăng tin mới</h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 border">
          <Address />
          <Overview />
        </div>
        <div className="col-span-4 border">map</div>
      </div>
    </div>
  );
};

export default CreatePost;
