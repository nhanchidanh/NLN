import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex items-center gap-2">
      <img
        src={
          currentUser?.avatar ||
          "https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
        }
        alt="avatar"
        className="w-10 h-10 object-cover rounded-full shadow-md"
      />
      <div>
        <div>
          <span>Xin chào</span> <b>{currentUser?.name}</b>
        </div>
        <div>
          <span>Mã tài khoản:</span>{" "}
          <b>{`${currentUser?.id?.slice(0, 10)}...`}</b>
        </div>
      </div>
    </div>
  );
};

export default User;
