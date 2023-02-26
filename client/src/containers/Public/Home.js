import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Navigation, Search } from "./index";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto h-full ">
      <Header></Header>
      <Navigation></Navigation>
      <Search></Search>
      <div className="w-3/4 flex flex-col justify-start mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
