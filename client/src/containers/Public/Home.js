import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center m-auto h-full ">
      <Header></Header>
      <Navigation></Navigation>
      <div className="w-1100 flex flex-col items-center justify-start mt-5 border border-red-500">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
