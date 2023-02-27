import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Navigation, Search } from "./index";

const Home = () => {
  return (
    <div className="w-full mx-auto h-full ">
      <Header></Header>
      <Navigation></Navigation>
      <Search></Search>
      <div className="w-4/5 mx-auto flex flex-col justify-start mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
