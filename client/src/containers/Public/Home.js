import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center m-auto h-full ">
      <Header></Header>
      <Navigation></Navigation>
      <div className="w-3/5 flex flex-col justify-start mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
