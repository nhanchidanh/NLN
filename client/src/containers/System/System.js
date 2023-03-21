import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"; //Đây là "component" hoạt động như hook useNavigate
import { path } from "../../utils/constant";
import Header from "./Header";
import Sidebar from "./Sidebar";

const System = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true} />; //replace: true -> Delete history and dont allow back to prev page
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="grid grid-cols-12 grid-rows-none h-full">
        <div className="col-span-2 h-full mt-[40px]">
          <Sidebar />
        </div>
        <div className="col-span-10 mt-[40px] h-full bg-white shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default System;
